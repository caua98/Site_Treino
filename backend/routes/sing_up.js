const express = require('express');
const router = express.Router();
// Importa o cliente configurado do arquivo supabaseClient.js
const supabase = require('../supabaseClient');

router.post('/sing_up', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }   
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) {
            return res.status(401).json({ error: error.message });
        }
        res.status(200).json({
            message: 'Cadastro realizado com sucesso',
            user: data.user,
            session: data.session
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
});

module.exports = router;