document.addEventListener("DOMContentLoaded", () => {
    const contentData = {
        etica: {
            title: "Riscos Éticos",
            description:
                "A implementação de IA traz consigo responsabilidades. Mapeamos os principais riscos e definimos estratégias claras para mitigá-los, garantindo que o sistema empodere o usuário, não o substitua.",
            points: [
                {
                    risk: "Autonomia e Decisão",
                    mitigation:
                        "Implementar transparência nas recomendações, explicando os fatores considerados e oferecendo opções de customização manual.",
                },
                {
                    risk: "Exclusão Digital",
                    mitigation:
                        "Desenvolver interfaces intuitivas e processos assistidos para todos os níveis de habilidade digital.",
                },
                {
                    risk: "Responsabilidade por Erros",
                    mitigation:
                        "Implementar disclaimers claros, limites de confiança nas recomendações e canais rápidos para correção de problemas.",
                },
                {
                    risk: "Transparência Algorítmica",
                    mitigation:
                        "Incluir explicações sobre os fatores que influenciaram cada recomendação e permitir que usuários visualizem/modifiquem esses fatores.",
                },
            ],
            chartData: {
                labels: [
                    "Autonomia",
                    "Inclusão",
                    "Responsabilidade",
                    "Transparência",
                ],
                data: [5, 4, 4, 5],
            },
        },
        privacidade: {
            title: "Privacidade dos Dados (LGPD)",
            description:
                "Nosso compromisso com a privacidade é total. O sistema é projetado desde sua concepção para estar em conformidade com a LGPD, tratando os dados dos usuários com máxima seriedade.",
            points: [
                {
                    risk: "Coleta de Dados",
                    mitigation:
                        "Implementar princípios de minimização de dados, coletando apenas o estritamente necessário para a recomendação.",
                },
                {
                    risk: "Armazenamento e Segurança",
                    mitigation:
                        "Implementar criptografia, controles de acesso rigorosos e políticas de retenção de dados.",
                },
                {
                    risk: "Uso e Compartilhamento",
                    mitigation:
                        "Política clara de privacidade, obtenção de consentimento específico e processos para permitir que usuários visualizem, corrijam e excluam seus dados.",
                },
            ],
            chartData: {
                labels: ["Minimização", "Segurança", "Controle do Usuário"],
                data: [5, 5, 5],
            },
        },
        vies: {
            title: "Viés Algorítmico",
            description:
                "Um sistema inteligente deve ser um sistema justo. Adotamos uma postura proativa para combater vieses, garantindo que as recomendações sejam equitativas para todos.",
            points: [
                {
                    risk: "Viés nos Dados de Treinamento",
                    mitigation:
                        "Diversificar as fontes de dados e auditar regularmente a representatividade cultural nos dados de treinamento.",
                },
                {
                    risk: "Viés Econômico",
                    mitigation:
                        "Incorporar expressamente o orçamento como variável crítica e oferecer alternativas em diferentes faixas de preço.",
                },
                {
                    risk: "Viés Regional/Cultural",
                    mitigation:
                        "Incluir dados específicos de diferentes tradições culinárias e garantir que a base de conhecimento represente adequadamente a diversidade regional.",
                },
            ],
            chartData: {
                labels: [
                    "Diversidade de Dados",
                    "Justiça Econômica",
                    "Respeito Cultural",
                ],
                data: [4, 5, 5],
            },
        },
    }

    // Funcionalidade Problem/Solution
    const problemCards = document.querySelectorAll(".problem-card")
    const solutionContents = document.querySelectorAll(".solution-content")
    const solutionPlaceholder = document.getElementById("solution-placeholder")

    problemCards.forEach((card) => {
        card.addEventListener("click", () => {
            const targetId = card.dataset.target

            solutionPlaceholder.classList.add("hidden")

            solutionContents.forEach((content) => {
                if (content.id === targetId) {
                    content.classList.remove("hidden")
                } else {
                    content.classList.add("hidden")
                }
            })
        })
    })

    // Funcionalidade Responsibility Dashboard
    const ctx = document.getElementById("responsibilityChart").getContext("2d")
    let chart

    function createOrUpdateChart(data) {
        if (chart) {
            chart.destroy()
        }
        chart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: "Nível de Atenção",
                        data: data.data,
                        backgroundColor: "rgba(217, 83, 79, 0.2)",
                        borderColor: "rgba(217, 83, 79, 1)",
                        borderWidth: 2,
                        pointBackgroundColor: "rgba(217, 83, 79, 1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(217, 83, 79, 1)",
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 5,
                        pointLabels: {
                            font: {
                                size: 14,
                            },
                            color: "#4A4A4A",
                        },
                        ticks: {
                            stepSize: 1,
                            display: false,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        })
    }

    const contentContainer = document.getElementById("responsibility-content")
    const filterButtons = document.querySelectorAll(".btn-filter")

    function updateContent(contentKey) {
        const data = contentData[contentKey]

        let pointsHtml = data.points
            .map(
                (p) => `
            <div class="mb-4">
                <h5 class="font-bold text-lg text-gray-700">${p.risk}</h5>
                <p class="text-gray-600">${p.mitigation}</p>
            </div>
        `
            )
            .join("")

        contentContainer.innerHTML = `
            <h4 class="text-2xl font-bold accent-text mb-3">${data.title}</h4>
            <p class="mb-6 text-gray-600">${data.description}</p>
            ${pointsHtml}
        `

        createOrUpdateChart(data.chartData)
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"))
            button.classList.add("active")
            const contentKey = button.dataset.content
            updateContent(contentKey)
        })
    })

    updateContent("etica")

    // Funcionalidade IA Playground
    const generateBtn = document.getElementById("generate-menu-btn")
    const adultosInput = document.getElementById("adultos")
    const criancasInput = document.getElementById("criancas")
    const tipoEventoSelect = document.getElementById("tipo-evento")
    const restricaoCheckboxes = document.querySelectorAll(".restricao-checkbox")
    const menuResultContainer = document.getElementById("menu-result")

    generateBtn.addEventListener("click", async () => {
        // Validação dos campos obrigatórios
        const adultos = adultosInput.value.trim()
        const criancas = criancasInput.value.trim() || "0"
        const tipoEvento = tipoEventoSelect.value

        if (!adultos || adultos <= 0) {
            menuResultContainer.innerHTML =
                '<p class="text-red-500 text-center">Por favor, informe o número de adultos.</p>'
            return
        }

        if (!tipoEvento) {
            menuResultContainer.innerHTML =
                '<p class="text-red-500 text-center">Por favor, selecione o tipo de evento.</p>'
            return
        }

        // Coletar restrições selecionadas
        const restricoes = Array.from(restricaoCheckboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value)

        // Mostrar loader
        menuResultContainer.innerHTML =
            '<div class="flex justify-center items-center"><div class="loader"></div></div>'
        generateBtn.disabled = true

        // Preparar dados para envio
        const requestData = {
            adultos: adultos,
            criancas: criancas,
            evento: tipoEvento,
            restricoes: restricoes,
        }

        try {
            const response = await fetch(
                "https://n8nflow-dvd3a6duhwchaxen.eastus-01.azurewebsites.net/webhook/churrasco-menu",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(requestData),
                }
            )

            if (!response.ok) {
                throw new Error(
                    `Erro na API: ${response.status} - ${response.statusText}`
                )
            }

            const result = await response.json()

            // Formatar e exibir o resultado
            const formattedResult = formatMenuResult(result)
            menuResultContainer.innerHTML = formattedResult
        } catch (error) {
            console.error("Erro ao chamar a API:", error)
            menuResultContainer.innerHTML =
                '<p class="text-red-500 text-center">Ocorreu um erro ao gerar a sugestão. Por favor, tente novamente mais tarde.</p>'
        } finally {
            generateBtn.disabled = false
        }
    })

    // Função para formatar o resultado da API
    function formatMenuResult(data) {
        let html = `<h4 class="font-bold text-xl mb-4 accent-text">🥩 Cardápio Personalizado Gerado pela IA</h4>`

        // Seção de Carnes
        if (data.carnes && data.carnes.length > 0) {
            html += `
                <div class="mb-6">
                    <h5 class="font-bold text-lg mb-3 text-gray-800">🔥 Carnes:</h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            `
            data.carnes.forEach((carne) => {
                html += `
                    <div class="bg-gray-50 p-3 rounded-lg border">
                        <div class="font-semibold text-gray-700">${carne.nome}</div>
                        <div class="text-sm text-gray-600">${carne.quantidade}</div>
                    </div>
                `
            })
            html += `</div></div>`
        }

        // Seção de Acompanhamentos
        if (data.acompanhamentos && data.acompanhamentos.length > 0) {
            html += `
                <div class="mb-6">
                    <h5 class="font-bold text-lg mb-3 text-gray-800">🥗 Acompanhamentos:</h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            `
            data.acompanhamentos.forEach((acompanhamento) => {
                html += `
                    <div class="bg-gray-50 p-3 rounded-lg border">
                        <div class="font-semibold text-gray-700">${acompanhamento.nome}</div>
                        <div class="text-sm text-gray-600">${acompanhamento.quantidade}</div>
                    </div>
                `
            })
            html += `</div></div>`
        }

        // Seção de Opções para Crianças
        if (data.opcoes_para_criancas && data.opcoes_para_criancas.length > 0) {
            html += `
                <div class="mb-6">
                    <h5 class="font-bold text-lg mb-3 text-gray-800">👶 Opções para Crianças:</h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            `
            data.opcoes_para_criancas.forEach((opcao) => {
                html += `
                    <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div class="font-semibold text-gray-700">${opcao.nome}</div>
                        <div class="text-sm text-gray-600">${opcao.quantidade}</div>
                    </div>
                `
            })
            html += `</div></div>`
        }

        // Dica final
        const totalPessoas =
            parseInt(adultosInput.value || 0) +
            parseInt(criancasInput.value || 0)
        html += `
            <div class="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                <p class="text-sm text-green-800">
                    <strong>🎯 Resumo:</strong> Cardápio calculado para ${totalPessoas} pessoas 
                    (${adultosInput.value} adultos${
            criancasInput.value > 0 ? ` + ${criancasInput.value} crianças` : ""
        }) 
                    para um evento ${tipoEventoSelect.value.toLowerCase()}.
                </p>
            </div>
        `

        return html
    }
})
