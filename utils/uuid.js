function uuid() {

    // Retorna um número randômico entre 0 e 15.
    function randomDigit() {
    
        // Se o browser tiver suporte às bibliotecas de criptografia, utilize-as;
        if (crypto && crypto.getRandomValues) {
        
            // Cria um array contendo 1 byte:
            var rands = new Uint8Array(1);
            
            // Popula o array com valores randômicos
            crypto.getRandomValues(rands);
            
            // Retorna o módulo 16 do único valor presente (%16) em formato hexadecimal
            return (rands[0] % 16).toString(16);
        } else {
        // Caso não, utilize random(), que pode ocasionar em colisões (mesmos valores
        // gerados mais frequentemente):
            return ((Math.random() * 16) | 0).toString(16);
        }
    }
    
    // A função pode utilizar a biblioteca de criptografia padrão, ou
    // msCrypto se utilizando um browser da Microsoft anterior à integração.
    var crypto = window.crypto || window.msCrypto;
    
    // para cada caracter [x] na string abaixo um valor hexadecimal é gerado via
    // replace:
    return 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, randomDigit);
}
