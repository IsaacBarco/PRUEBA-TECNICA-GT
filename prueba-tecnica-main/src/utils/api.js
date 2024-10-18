const API_KEY = "deafbf7d5bc7485cb8d7761f2e0b379d"; 

export const fetchNews = async (searchQuery, page, language) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}&page=${page}&pageSize=10&language=${language}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al obtener noticias");
        }

        const data = await response.json();
        return data.articles; 
    } catch (error) {
        console.error("Error de red:", error);
        throw new Error("Error de red. Intenta más tarde.");
    }
};