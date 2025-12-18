export const maskDataNascimento = (value: string) => {
    return value
        .replace(/\D/g, "")            // remove letras
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 10);
};


export const getYoutubeThumbnail = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;

    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "";
};
