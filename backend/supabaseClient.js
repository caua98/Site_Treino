const { createClient } = require('@supabase/supabase-js');
const path = require('path');

// Configura o dotenv para procurar o arquivo .env na raiz do projeto (um nível acima de backend)
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Verificação de segurança para ajudar no debug
if (!supabaseUrl || !supabaseKey) {
    console.error('Erro: SUPABASE_URL ou SUPABASE_KEY estão faltando.');
    console.error('Verifique se o arquivo .env está na raiz do projeto e se as variáveis estão corretas.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;