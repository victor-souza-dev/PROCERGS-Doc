// .vitepress/plugins/import-handler.js
import { mkdir, writeFile, rm } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { resolve, join } from 'path';
import fetch from 'node-fetch';

const IMPORT_REGEX = /<!--\s*@import:\s*(https?:\/\/[^\s]+)\s*-->/g;
const IMPORTS_DIR = resolve(process.cwd(), 'public', 'imports');

export default function importHandlerPlugin() {
    return {
        name: 'vitepress-import-handler',
        async buildStart() {
            // Limpa o diretório de imports no início do build
            try {
                await rm(IMPORTS_DIR, { recursive: true, force: true });
                console.log('[Import Handler] Diretório de imports limpo');
            } catch (error) {
                console.error(`[Import Handler] Falha ao limpar diretório: ${error.message}`);
            }
        },
        async transform(code, id) {
            if (!id.endsWith('.md')) return;

            console.log(`[Import Handler] Processando arquivo: ${id}`);

            const replacements = [];
            const matches = [...code.matchAll(IMPORT_REGEX)];

            if (matches.length === 0) return code;

            // Garante que o diretório existe
            await mkdir(IMPORTS_DIR, { recursive: true });

            await Promise.all(
                matches.map(async (match) => {
                    const [fullMatch, url] = match;
                    try {
                        console.log(`[Import Handler] Buscando: ${url}`);
                        const response = await fetch(url);

                        if (!response.ok) {
                            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                        }

                        const content = await response.text();
                        const fileName = `${uuidv4()}.md`;
                        const filePath = join(IMPORTS_DIR, fileName);

                        await writeFile(filePath, content);

                        replacements.push({
                            original: fullMatch,
                            replacement: `::: include /imports/${fileName} :::\n`
                        });

                        console.log(`[Import Handler] Import salvo em: ${filePath}`);
                    } catch (error) {
                        console.error(`[Import Handler] Falha ao processar ${url}: ${error.message}`);
                        replacements.push({ original: fullMatch, replacement: '' });
                    }
                })
            );

            return replacements.reduce(
                (acc, { original, replacement }) => acc.replace(original, replacement),
                code
            );
        }
    };
}