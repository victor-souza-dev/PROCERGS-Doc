---
id: angular-v16-v19
title: Angular v16 vs Angular v19
sidebar_label: Angular v16 vs Angular v19
lastUpdated: true
---

# Análise de Produtividade e Tempo de Desenvolvimento entre Bundles

Este documento analisa o impacto da migração do Angular v16 para o Angular v19
(esbuild) em termos de tempo de desenvolvimento e produtividade. A análise é
baseada em dados coletados de builds, starts e auto-reloads, além de uma
estimativa de alterações por minuto durante o desenvolvimento tendo como base
duas aplicações criadas do zero, cada uma seguindo um modelo da sua versão do
Angular correspondente.

## Angular v16:

### Build (Sem Cache):

```
Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.b986b2ab010b9222.js      | main          |  94.39 kB |                28.39 kB
polyfills.09c5921ca8a08bc3.js | polyfills     |  33.98 kB |                11.09 kB
runtime.d8ee85773ad7c52e.js   | runtime       | 892 bytes |               513 bytes
styles.569818a94afbdfa3.css   | styles        | 298 bytes |               143 bytes

                              | Initial Total | 129.54 kB |                40.12 kB
```

Tempo: 19.258s

### Build (Com Cache):

```
Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.b986b2ab010b9222.js      | main          |  94.39 kB |                28.39 kB
polyfills.09c5921ca8a08bc3.js | polyfills     |  33.98 kB |                11.09 kB
runtime.d8ee85773ad7c52e.js   | runtime       | 892 bytes |               513 bytes
styles.569818a94afbdfa3.css   | styles        | 298 bytes |               143 bytes

                              | Initial Total | 129.54 kB |                40.12 kB
```

Tempo: 5.976s

### Start(Sem Cache):

```
Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.04 MB |
polyfills.js          | polyfills     | 341.96 kB |
styles.css, styles.js | styles        | 229.56 kB |
runtime.js            | runtime       |   6.51 kB |
main.js               | main          |   6.08 kB |

                      | Initial Total |   2.61 MB
```

Tempo: 12.881s

### Start (Com Cache):

```
Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.04 MB |
polyfills.js          | polyfills     | 341.96 kB |
styles.css, styles.js | styles        | 229.56 kB |
runtime.js            | runtime       |   6.51 kB |
main.js               | main          |   6.08 kB |

                      | Initial Total |   2.61 MB
```

Tempo: 14.600s

### AutoReload:

```
Initial Chunk Files | Names   | Raw Size
runtime.js          | runtime |  6.51 kB |
main.js             | main    |  6.32 kB |

3 unchanged chunks

Build at: 2025-02-18T02:36:22.151Z - Hash: b7845ae84b8edb7b - Time: 1542ms

√ Compiled successfully.
✔ Browser application bundle generation complete.

Initial Chunk Files | Names   | Raw Size
runtime.js          | runtime |  6.51 kB |
main.js             | main    |  6.08 kB |

3 unchanged chunks

Build at: 2025-02-18T02:36:30.694Z - Hash: acf2c4e5b23e60a0 - Time: 285ms

√ Compiled successfully.
✔ Browser application bundle generation complete.

Initial Chunk Files | Names   | Raw Size
main.js             | main    |  7.37 kB |
runtime.js          | runtime |  6.51 kB |

3 unchanged chunks

Build at: 2025-02-18T02:36:47.195Z - Hash: 707dbcf44a1b064c - Time: 682ms

√ Compiled successfully.
✔ Browser application bundle generation complete.

Initial Chunk Files | Names   | Raw Size
runtime.js          | runtime |  6.51 kB |
main.js             | main    |  6.08 kB |

3 unchanged chunks

Build at: 2025-02-18T02:36:54.202Z - Hash: 5ad38e74f27005fa - Time: 286ms
```

Tempo médio: 0.699s

---

## Angular v19:

### Build (Sem Cache):

```
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-YCH3GXKT.js      | main          | 183.39 kB |                49.69 kB
polyfills-FFHMD2TL.js | polyfills     |  34.52 kB |                11.28 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes

                      | Initial total | 217.91 kB |                60.97 kB
```

Tempo: 8.273s

### Build (Com Cache):

```
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-YCH3GXKT.js      | main          | 183.39 kB |                49.69 kB
polyfills-FFHMD2TL.js | polyfills     |  34.52 kB |                11.28 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes

                      | Initial total | 217.91 kB |                60.97 kB
```

Tempo: 4.304s

### Start(Sem Cache):

```
Initial chunk files | Names         | Raw size
polyfills.js        | polyfills     | 90.20 kB |
main.js             | main          |  3.88 kB |
styles.css          | styles        | 95 bytes |

                    | Initial total | 94.18 kB
```

Tempo: 2.776s

### Start (Com Cache):

```
Initial chunk files | Names         | Raw size
polyfills.js        | polyfills     | 90.20 kB |
main.js             | main          |  3.88 kB |
styles.css          | styles        | 95 bytes |

                    | Initial total | 94.18 kB
```

Tempo: 3.193s

### AutoReload:

```
Initial chunk files | Names | Raw size
main.js             | main  |  4.98 kB |

Application bundle generation complete. [0.250 seconds]

Page reload sent to client(s).
Initial chunk files | Names | Raw size
main.js             | main  |  5.10 kB |

Application bundle generation complete. [0.180 seconds]

Component update sent to client(s).
Initial chunk files | Names | Raw size
main.js             | main  |  4.98 kB |

Application bundle generation complete. [0.161 seconds]

Component update sent to client(s).
Initial chunk files | Names | Raw size
main.js             | main  |  3.88 kB |

Application bundle generation complete. [0.185 seconds]
```

Tempo médio: 0.194s

---

## Resultados

> [!NOTE] Fórmula "total": (Build + Start + AutoReload) / 3

> [!NOTE] Fórmula de Percentual de Redução: ((Valor Original - Valor Novo) /
> Valor Original) \* 100

| Operation             | Angular v16 | Angular v19 | Improvement |
| --------------------- | ----------- | ----------- | ----------- |
| Build (Without Cache) | 19.258s     | 8.273s      | +57.04%     |
| Build (With Cache)    | 5.976s      | 4.304s      | +28.00%     |
| Start (Without Cache) | 12.881s     | 2.776s      | +78.44%     |
| Start (With Cache)    | 14.600s     | 3.193s      | +78.13%     |
| AutoReload            | 0.699s      | 0.194s      | +72.25%     |
| Total                 | 10.683s     | 3.748s      | +64.77%     |

## Performance do Desenvolvedor

As estimativas de alterações por minuto são baseadas em suposições racionais e
ponderadas, considerando cenários típicos de desenvolvimento. Esses valores
podem variar dependendo da complexidade do projeto, da experiência do
desenvolvedor e das ferramentas utilizadas.

### Frequência de Alterações de Código

> [!NOTE] Conversão para alterações/segundo = alterações/minuto ÷ 60

#### Tipos de Alterações

1. Alterações Simples

- Frequência: 1-5 alterações/minuto
- Equivalente: 0,0167 ~ 0,0833 alterações/segundo
- Média: 0,05 alterações/segundo

2. Alterações Complexas

- Frequência: 1 alteração/5-10 minutos
- Equivalente: (1 / (5 x 60) )0,00333 ~ (1 / (10 x 60)) 0,00166
  alterações/segundo
- Média: 0,00249 alterações/segundo

#### Distribuição de Tempo

- Tarefas Simples: 60%
- Tarefas Complexas: 40%

> [!NOTE] Média Ponderada = (0.6 × Média Alterações Simples/segundo) + (0.4 ×
> Média Alterações Complexa/segundo)

- Alterações simples: 0.6 x 0,05 = 0,03 alterações/segundo = 1 alteração a cada
  33,33 segundos ou 0,55 minutos
- Alterações Complexas: 0.4 x 0,00249 = 0,000996 alterações/segundo = 1
  alteração a cada 1004 segundos ou 16,73 minutos

> Média Ponderada: 0,03 + 0,000996 = 0,030996 alterações/segundo ou 1 alteração
> a cada 32,26 segundos ou 0,54 minutos.

Portanto, há em um fluxo normal de desenvolvimento em média: 1 alteração a cada
32,26 segundos ou 0,54 minutos.

#### Análise de Produtividade (Jornada 8h)

##### Dados

- **Tempo total**: 8 horas = 28.800 segundos.
- **Distribuição**:
  - Tarefas Simples: 60% do tempo (17.280 segundos).
  - Tarefas Complexas: 40% do tempo (11.520 segundos).

##### Cálculo de Alterações por Tarefa

- **Simples**: 0,05 alterações/segundo × 17.280 segundos = 864 alterações
- **Complexas**: 0,00249 alterações/segundo × 11.520 segundos = 28,8 alterações
- **Total**: 864 + 28,8 = 892,8 alterações/dia.

##### Tempo Gasto em Reloads

> [!NOTE] Fórmula: Tempo Gasto em Reloads = Média ponderada de alterações por
> segundo × Tempo de Reload

###### Angular v16:

- Tempo de Reload: 0,699s
- Cálculo: ~0,031 × 0.699 = 0.0217s/segundo (2,17%)

###### Angular v19:

- Tempo de Reload: 0,194s
- Cálculo: 0,031 × 0.194 = 0.0060s/segundo (0,60%)

##### Ganho de Tempo

> [!NOTE] Trabalhamos 8h por dia, 5 dias por semana, 20 dias por mês, 12 meses
> por ano o que equivale a 1.920 minutos por ano.

- Ganho por Segundo: 0,0217s (v16) − 0,0060s (v19) = 0,0157s/segundo
- Ganho Percentual: ((0,0217 - 0,0060) / 0,0217) × 100 ≈ 72,25% mais rápido
- Impacto Diário: 0,0157s/segundo × 28.800 segundos = 452,16 segundos ≈ 7,54
  minutos/dia
- Impacto Mensal: 7,54 minutos/dia × 20 dias = 150,8 minutos/mês ≈ 2,51
  horas/mês
- Impacto Anual: 150,8 minutos/mês x 12 meses = 1.809,6 minutos/ano ≈ 30,16
  horas/ano
- Impacto em Equipe: 30,16 horas/ano × 10 desenvolvedores = 301,6 horas/ano ≈
  12,57 dias/ano
- Ganho de produtividade: (30,16 horas/ano / 1.920) x 100 ≈ 1,57% ​

## Conclusão Final

A migração para o Angular v19(esbuild) traz benefícios mensuráveis e
estratégicos para a produtividade da equipe:

1. Ganhos Imediatos:

- Redução de 72,25% no tempo de reload:
- Cada alteração no código passa de 0,699s (v16) para 0,194s (v19) .
- Impacto diário: Economia de 7,54 minutos por desenvolvedor .
- Produtividade técnica: 1,57% de ganho anual por desenvolvedor (30,16
  horas/ano).

2. Contexto de Uso:

- Projetos novos vs. legados:
  - Os ganhos são calculados para projetos do zero. Em aplicações complexas, o
    tempo de reload pode ser 2x–5x maior , ampliando o impacto da migração.
  - Com ferramentas como HMR (Hot Module Replacement) e arquitetura simplificada
    via Signals , o ganho agregado pode chegar a 5–10% anual em produtividade o
    que equivale a 96h–192h ou 12–24 dias de trabalho por ano.

3. Por que o 1,57% é estratégico?

- Acúmulo em longo prazo:
  - Em projetos de 3 anos, o ganho totaliza 4,71% de eficiência.
  - Para equipes grandes, isso significa mais tempo para inovação (ex.:
    refatoração, testes, aprendizado).
- Redução de atrito:
  - Menos espera em reloads → menos interrupções → maior foco e qualidade de
    código.
