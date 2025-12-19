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


export const calcularTempoEmpresa = (dataAdmissao: string): string => {
    if (!dataAdmissao) return "-";

    const [dia, mes, ano] = dataAdmissao.split("/").map(Number);

    const admissao = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    let anos = hoje.getFullYear() - admissao.getFullYear();
    let meses = hoje.getMonth() - admissao.getMonth();

    if (
        meses < 0 ||
        (meses === 0 && hoje.getDate() < admissao.getDate())
    ) {
        anos--;
        meses += 12;
    }

    return anos > 0
        ? `${anos} ano${anos > 1 ? "s" : ""}`
        : `${meses} m${meses > 1 ? "eses" : "ês"}`;
}
