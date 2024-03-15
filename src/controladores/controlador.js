const { senhas } = require('../bancodedados');

const { usuario, senha } = senhas[0];

let erros = 3;

const verificadorSenha = (req, res) => {
    const { senha_banco, usuario_banco } = req.query;


    if (!senha_banco) {
        return res.status(400).json({ mensagem: "A senha é obrigatorio preencher" });
    };
    if (!usuario_banco) {
        return res.status(400).json({ mensagem: "O usuario é obrigatorio preencher" });
    };
    if (erros >= 0) {
        if (erros === 0) {
            setTimeout(function () {
                erros = 3
            }, 10000)

            clearTimeout();

            return res.status(401).json("Conta bloqueada, tente novamente mais tarde")
        }
        if (senha_banco != senha) {
            res.status(401).json({ mensagem: `A senha do banco informada é inválida! ${erros} tentativas restantes.` });
            erros--
            return
        }
    }
    if (senha === senha_banco && usuario_banco === usuario) {
        contadorSenha = 3;
        return res.status(200).send("Conta logada com sucesso!");
    }
};

module.exports = {
    verificadorSenha
}

