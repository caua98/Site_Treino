const express = require('express');
const router = express.Router();
// Importa o cliente configurado do arquivo supabaseClient.js
const supabase = require('../supabaseClient');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            return res.status(401).json({ error: error.message });
        }

        res.status(200).json({
            message: 'Login realizado com sucesso',
            user: data.user,
            session: data.session
        });
    } catch (err) {
        console.error(err); // Log do erro no terminal para ajudar
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

router.post('/logout', async (req, res) => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.status(200).json({ message: 'Logout realizado com sucesso' });
    }
    catch (err) {
        res.status(500).json({ error: 'Erro ao fazer logout' });
    }
});

module.exports = router;