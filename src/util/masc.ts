export const maskDataNascimento = (value: string) => {
    return value
        .replace(/\D/g, "")            // remove letras
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 10);
};
