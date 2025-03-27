---
id: angular-v16-v19
title: Angular v16 vs Angular v19
sidebar_label: Angular v16 vs Angular v19
lastUpdated: true
---

# Análise de Produtividade e Tempo de Desenvolvimento

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

> [!NOTE] Fórmula de Percentual de Redução: (Valor Original - Valor novo) /
> Valor [!NOTE] novo \* 100

| Operation             | Angular v16 | Angular v19 | Improvement |
| --------------------- | ----------- | ----------- | ----------- |
| Build (Without Cache) | 19.258s     | 8.273s      | +57.04%     |
| Build (With Cache)    | 5.976s      | 4.304s      | +28.00%     |
| Start (Without Cache) | 12.881s     | 2.776s      | +78.44%     |
| Start (With Cache)    | 14.600s     | 3.193s      | +78.13%     |
| AutoReload            | 0.699s      | 0.194s      | +72.25%     |
| Total                 | 10.683s     | 3.748s      | +64.77%     |

## Performance do Desenvolvedor

### Quantidade média de alterações por minuto

Com base em pesquisas e benchmarks da indústria:

> [!NOTE] Fórmula de conversão de alterações por minuto para segundo: Alterações
> por [!NOTE] minuto / 60

- Alterações Simples: Um desenvolvedor pode fazer entre 1 a 5 alterações de
  código por minuto (equivalente a 0,016 a 0,083 alterações por segundo ).
- Alterações Complexas: Para tarefas mais complexas, o número cai para cerca de
  1 alteração a cada 5-10 minutos (equivalente a 0,002 a 0,003 alterações por
  segundo ).

Proporção de tempo estimado:

- 60% tarefas simples (0.6)
- 40% tarefas complexas (0.4)

> [!NOTE] Fórmula de média ponderada: (Proporção de Tarefas Simples _ Alterações
> por [!NOTE] segundo de tarefa simples) + (Proporção de Tarefas Complexas _
> Alterações por [!NOTE] segundo de tarefa complexas)

Em média, considerando uma mistura de tarefas simples e complexas, um
desenvolvedor faz aproximadamente 0,01 a 0,05 alterações de código por segundo.

Suponha que um desenvolvedor está trabalhando em uma tarefa típica durante um
dia de trabalho de 8 horas:

Tarefas Simples : 60% do tempo (4,8 horas). Tarefas Complexas : 40% do tempo
(3,2 horas). Com base nas taxas de alteração mencionadas:

Tarefas Simples : 3 alterações/minuto × 288 minutos = 864 alterações. Tarefas
Complexas : 0,1 alterações/minuto × 192 minutos = 19 alterações. Total: 883
alterações em 8 horas

### Tempo médio gasto com a espera do autoreload

> [!NOTE] Fórmula: Alterações por segundo x Tempo do reload

#### v16

- 0,01: 0,00699s
- 0,03: 0,02097s

#### v19

- 0,01: 0,00194s
- 0,03: 0,00582s

### Resultado

| Métrica                   | Angular v16        | Angular v19        | Ganho de Tempo     |
| ------------------------- | ------------------ | ------------------ | ------------------ |
| Tempo médio de reload     | 0,699s             | 0,194s             | 72,25% mais rápido |
| Tempo gasto com reloads/s | 0,00699 - 0,02097s | 0,00194 - 0,00582s | 0,00505 - 0,01515s |
| Ganho de tempo em 1 hora  | -                  | -                  | 18,18 - 54,54s     |

| Período | Tempo Economizado (Horas) |
| ------- | ------------------------- |
| 1 mês   | 0,81 a 2,42 horas         |
| 6 meses | 4,85 a 14,54 horas        |
| 1 ano   | 9,70 a 29,09 horas        |

### Impacto na Produtividade

Essas economias de tempo podem ser significativas ao longo do tempo:

- Em 1 mês , o desenvolvedor pode economizar até 2,42 horas , o que pode ser
  usado para realizar tarefas adicionais ou melhorar a qualidade do código.
- Em 6 meses , o ganho chega a quase 15 horas , permitindo mais tempo para
  atividades estratégicas, como refatoração ou aprendizado.
- Em 1 ano , o ganho pode chegar a quase 30 horas , o que equivale a quase 4
  dias úteis de trabalho.

## Estimativa de Tempo Médio de Reload em Aplicações Grandes

### Angular v16

O tempo médio de reload em aplicações leves é 0,699 segundos . Para aplicações
grandes, podemos estimar um aumento de 2x a 5x no tempo de reload, dependendo da
complexidade. Mínimo : 0,699×2=1,398segundos Máximo : 0,699×5=3,495segundos
Portanto, o tempo médio de reload em aplicações grandes varia entre 1,398s e
3,495s .

### Angular v19

O tempo médio de reload em aplicações leves é 0,194 segundos . Para aplicações
grandes, estimamos um aumento semelhante de 2x a 5x no tempo de reload. Mínimo :
0,194×2=0,388segundos Máximo : 0,194×5=0,970segundos Portanto, o tempo médio de
reload em aplicações grandes varia entre 0,388s e 0,970s .

### Cálculo do Tempo Gasto com Reloads por Segundo

#### Angular v16

- Para 0,01 alterações por segundo :
  - Mínimo: 0,01×1,398=0,01398segundos
  - Máximo: 0,01×3,495=0,03495segundos
- Para 0,03 alterações por segundo : - Mínimo: 0,03×1,398=0,04194segundos -
  Máximo: 0,03×3,495=0,10485segundos Portanto, o tempo gasto com reloads por
  segundo varia entre 0,01398s e 0,10485s .

#### Angular v19

- Para 0,01 alterações por segundo :
  - Mínimo: 0,01×0,388=0,00388segundos
  - Máximo: 0,01×0,970=0,00970segundos
- Para 0,03 alterações por segundo : - Mínimo: 0,03×0,388=0,01164segundos -
  Máximo: 0,03×0,970=0,02910segundos Portanto, o tempo gasto com reloads por
  segundo varia entre 0,00388s e 0,02910s .

Ganho de Tempo com Angular v19 em Aplicações Grandes O ganho de tempo é
calculado como a diferença entre o tempo gasto com reloads no Angular v16 e no
Angular v19.

- Por Segundo - Mínimo : 0,01398−0,00388=0,01010segundos - Máximo :
  0,10485−0,02910=0,07575segundos Portanto, o ganho de tempo por segundo varia
  entre 0,01010s e 0,07575s .

- Em 1 Hora - Mínimo : 0,01010×3600=36,36segundos - Máximo :
  0,07575×3600=272,70segundos Portanto, o ganho de tempo em 1 hora varia entre
  36,36s e 272,70s .

Impacto na Produtividade em Diferentes Períodos Usando os valores máximos e
mínimos acima, podemos calcular o impacto em diferentes períodos:

- 1 Mês
  - Mínimo : 36,36×8×5×4=5.817,6segundos≈1,62horas
  - Máximo : 272,70×8×5×4=43.632segundos≈12,12horas
- 6 Meses
  - Mínimo : 1,62×6=9,72horas
  - Máximo : 12,12×6=72,72horas
- 1 Ano
  - Mínimo : 1,62×12=19,44horas
  - Máximo : 12,12×12=145,44horas

---

### Resumo Final

| Métrica                   | Angular v16         | Angular v19         | Ganho de Tempo      |
| ------------------------- | ------------------- | ------------------- | ------------------- |
| Tempo médio de reload     | 1,398s - 3,495s     | 0,388s - 0,970s     | 72,25% mais rápido  |
| Tempo gasto com reloads/s | 0,01398s - 0,10485s | 0,00338s - 0,02910s | 0,01010s - 0,07575s |
| Ganho de tempo em 1 hora  | -                   | -                   | 36,36 - 272,70s     |

| Período | Tempo Economizado (Horas) | Tempo Economizado (Dias Trabalhados - 8h/dia) |
| ------- | ------------------------- | --------------------------------------------- |
| 1 mês   | 1,62 a 12,12 horas        | 0,20 a 1,52 dias                              |
| 6 meses | 9,72 a 72,72 horas        | 1,22 a 9,09 dias                              |
| 1 ano   | 19,44 a 145,44 horas      | 2,43 a 18,18 dias                             |
