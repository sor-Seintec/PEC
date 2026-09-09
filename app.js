// 1. SUPABASE CONFIGURATION
const supabaseUrl = 'https://xxxpnndixvnxybkozkaf.supabase.co';
const supabaseKey = 'sb_publishable_DbB0lts7k_-g7chozhDcGg_osKnJ5h_';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

// 2. DADOS E GRUPOS
const groups = [
    {
        id: 'escolas',
        name: 'ESCOLAS',
        icon: 'fa-school',
        colorClass: 'bg-escolas',
        textColor: 'text-blue-700',
        items: [
            "EE Accácio de Vasconcelos", "EE Aggêo P. Amaral", "EE Altamir Gonçalves", "EE Amélia César", 
            "EE Ana Cecília Martins", "EE Antonia Lucchesi", "EE Antônio Cordeiro", "EE Antônio Miguel Pereira Junior", 
            "EE Antônio Padilha (CEL)", "EE Antônio Vieira Campos", "EE Arquimínio Marques da Silva", "EE Arthur Cyrillo Freire", 
            "EE Baltazar Fernandes", "EE Beathris Caixeiro Del Cistia", "EE Brigadeiro Tobias", "EE CEEJA Norberto Soares Ramos", 
            "EE Diógenes Almeida Marins", "EE Dionysio Vieira", "EE Dulce Esmeralda B. Ferreira", "EE Elza Salvestro Bonilha", 
            "EE Elzide Celestina S. P. Tunuchi", "EE Enéas Proença de Arruda", "EE Escolástica Rosa de Almeida", "EE Ezequiel Machado Nascimento", 
            "EE Fernanda de Camargo Pires", "EE Flávio Gagliardi", "EE Francisco Camargo Cesar", "EE Francisco Coccaro", 
            "EE Francisco Euphrasio Monteiro", "EE Genésio Machado", "EE Genezia Izabel C. Mencacci", "EE Geraldo do Espírito Santo Fogaça", 
            "EE Gualberto Moreira", "EE Guiomar Camolesi Souza", "EE Gumercindo Gonçalves", "EE Hélio Del Cistia", 
            "EE Humberto de Campos", "EE Ida Yolanda Lanzoni de Barros", "EE Isabel Lopes Monteiro", "EE Izabel Rodrigues Galvão", 
            "EE João Clímaco de Camargo Pires", "EE João Machado de Araújo", "EE João Rodrigues Bueno", "EE Joaquim Izidoro Marins", 
            "EE Jordina Amaral Arruda", "EE Jorge Madureira", "EE José Odin de Arruda", "EE José Quevedo", 
            "EE José Reginato", "EE José Roque de Almeida Rosa", "EE Júlia Rios Athayde", "EE Julio Bierrenbach Lima", 
            "EE Júlio Prestes de Albuquerque", "EE Laila Galep Sacker", "EE Lauro Sanchez", "EE Luiz Gonzaga de Camargo Fleury", 
            "EE Luiz Nogueira Martins (Senador)", "EE Marco Antonio Mencacci", "EE Maria Cândida de Barros Araújo", "EE Maria Helena Gazzi Bonadio", 
            "EE Maria Ondina Andrade", "EE Marina Grohmann Soares Fernandes", "EE Mário Guilherme Notari", "EE Monsenhor João Soares", 
            "EE Monteiro Lobato", "EE Nazira Nagib Jorge Murad Rodrigues", "EE Ossis Salvestrini Mendes", "EE Reverendo Ovídio Antônio de Souza", 
            "EE Visconde de Porto Seguro", "EE Rafael Orsi Filho", "EE Renato Seneca de Sá Fleury", "EE Roberto Paschoalick", 
            "EE Roque Conceição Martins", "EE Rosemary de Mello Moreira Pereira", "EE Sarah Salvestro", "EE Senador Vergueiro", 
            "EE Waldemar de Freitas Rosa", "EE Wanda Costa Daher", "EE Wilson Ramos Brandão", "EE Zélia Dulce de Campos Maia"
        ]
    },
    {
        id: 'formacao',
        name: 'CONVOCAÇÃO',
        icon: 'fa-chalkboard-user',
        colorClass: 'bg-escolas', // Azul como solicitado
        textColor: 'text-blue-800',
        items: [
            "Convocação"
        ]
    },
    {
        id: 'npe',
        name: 'NPE',
        icon: 'fa-building-user',
        colorClass: 'bg-outros',
        textColor: 'text-green-700',
        items: ['NPE']
    },
    {
        id: 'outros',
        name: 'OUTROS',
        icon: 'fa-shapes',
        colorClass: 'bg-outros',
        textColor: 'text-green-700',
        items: [
            "Acompanhamento(s)", "Alinhamento(s)", "Plataforma(s)", "Congresso", "EFAPE", 
            "Escola de Gestão", "Estudo Formativo", "GPACI", "JEESP", "Museu da Fama", 
            "OMASP", "PAEET", "Replicabilidade QA", "Reunião"
        ]
    },
    {
        id: 'acompanhamentos',
        name: 'APOIO',
        icon: 'fa-handshake-angle',
        colorClass: 'bg-acompanhamentos',
        textColor: 'text-yellow-700',
        items: [
            "Acompanhamento", "Formação", "Entrevistas", "Mentoria", "Plantão", "Reunião", "Supervisão", "Visita"
        ]
    },
    {
        id: 'observacoes',
        name: 'OCORRÊNCIAS',
        icon: 'fa-user-minus',
        colorClass: 'bg-observacoes',
        textColor: 'text-red-700',
        items: [
            "Atestado médico", "Ausência médica", "Doação de sangue", 
            "Exame médico", "Falta médica", "Férias", "Feriado", "Licença médica", "Licença prêmio", 
            "Ponto Facultativo", "Reunião"
        ]
    }
];

// Paleta de cores para cards do Gestor (18 cores exclusivas para até 15+ PECs)
const PEC_PALETTES = [
    // 1. Verde-Água / Turquesa / Teal (Referência Banner 2)
    { gradient: 'linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)', bg: '#f0fdfa', border: '#0d9488', tagColor: '#0f766e' },
    // 2. Azul Índigo / Violeta Moderno
    { gradient: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)', bg: '#f5f3ff', border: '#4f46e5', tagColor: '#4338ca' },
    // 3. Amarelo Ouro / Dourado (Referência Banner 1)
    { gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)', bg: '#fffdf5', border: '#f59e0b', tagColor: '#b45309' },
    // 4. Azul Turquesa / Celeste / Ciano (Referência Banner 3)
    { gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)', bg: '#f0f9ff', border: '#0284c7', tagColor: '#0369a1' },
    // 5. Verde Esmeralda Vibrante
    { gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)', bg: '#f0fdf4', border: '#059669', tagColor: '#047857' },
    // 6. Laranja Coral / Tangerina
    { gradient: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)', bg: '#fff7ed', border: '#ea580c', tagColor: '#c2410c' },
    // 7. Rosa Pink / Magenta Elegante
    { gradient: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)', bg: '#fdf2f8', border: '#db2777', tagColor: '#be185d' },
    // 8. Roxo Púrpura Imperial
    { gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)', bg: '#faf5ff', border: '#7c3aed', tagColor: '#6d28d9' },
    // 9. Vermelho Rubi / Carmim
    { gradient: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)', bg: '#fef2f2', border: '#dc2626', tagColor: '#b91c1c' },
    // 10. Azul Cobalto Profundo
    { gradient: 'linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)', bg: '#eff6ff', border: '#1d4ed8', tagColor: '#1e40af' },
    // 11. Fúcsia Orquídea
    { gradient: 'linear-gradient(135deg, #c026d3 0%, #e879f9 100%)', bg: '#fdf4ff', border: '#c026d3', tagColor: '#a21caf' },
    // 12. Verde Lima / Menta Fresco
    { gradient: 'linear-gradient(135deg, #16a34a 0%, #4ade80 100%)', bg: '#f0fdf4', border: '#16a34a', tagColor: '#15803d' },
    // 13. Terracota / Âmbar Bronze
    { gradient: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)', bg: '#fffbeb', border: '#b45309', tagColor: '#92400e' },
    // 14. Petróleo / Oceano Escuro
    { gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)', bg: '#ecfdf5', border: '#0f766e', tagColor: '#115e59' },
    // 15. Violeta Intenso / Amora
    { gradient: 'linear-gradient(135deg, #9333ea 0%, #c084fc 100%)', bg: '#fbf5ff', border: '#9333ea', tagColor: '#7e22ce' },
    // 16. Azul Ardósia / Steel Blue
    { gradient: 'linear-gradient(135deg, #475569 0%, #94a3b8 100%)', bg: '#f8fafc', border: '#475569', tagColor: '#1e293b' },
    // 17. Cereja / Framboesa
    { gradient: 'linear-gradient(135deg, #be123c 0%, #fb7185 100%)', bg: '#fff1f2', border: '#be123c', tagColor: '#9f1239' },
    // 18. Dourado Mostarda / Ocre
    { gradient: 'linear-gradient(135deg, #ca8a04 0%, #facc15 100%)', bg: '#fefce8', border: '#ca8a04', tagColor: '#a16207' },
];
function pecColorIndex(name) {
    let hash = 0;
    const str = (name || 'pec').toLowerCase().trim();
    for (let i = 0; i < str.length; i++) { hash = ((hash << 5) - hash) + str.charCodeAt(i); hash |= 0; }
    return Math.abs(hash) % PEC_PALETTES.length;
}

// 3. ESTADO DA APLICAÇÃO (PEC)
let currentUser = null;
let currentWeekStart = new Date();
let scheduledEvents = []; // { id, event_date, text_content, color_class, group_id, shift, pec_name }
let activeGroupId = null;
let selectedEventId = null;
const isPrimaryEvent = evt => evt && ['escolas', 'formacao', 'npe'].includes(evt.group_id);
function selectedPrimaryEvent() {
    return scheduledEvents.find(evt => evt.id === selectedEventId && isPrimaryEvent(evt) &&
        evt.user_id === currentUser?.id && !String(evt.id).startsWith('temp_'));
}
async function toggleEventFlag(id, groupId, label) {
    const evt = scheduledEvents.find(item => item.id === id);
    const group = groups.find(item => item.id === groupId);
    if (!isPrimaryEvent(evt) || evt.user_id !== currentUser?.id ||
        !['outros', 'acompanhamentos', 'observacoes'].includes(groupId) || !group?.items.includes(label)) {
        showLockToast(); return;
    }
    if (evt.savingFlags) return;
    const previous = Array.isArray(evt.flags) ? evt.flags : [];
    const exists = previous.some(flag => flag.groupId === groupId && flag.label === label);
    const flags = exists ? previous.filter(flag => flag.groupId !== groupId || flag.label !== label)
        : [...previous, { groupId, label }];
    evt.savingFlags = true;
    try {
        const { error } = await supabaseClient.from('pec_events').update({ flags }).eq('id', id).eq('user_id', currentUser.id);
        if (error) throw error;
        evt.flags = flags;
    } catch (error) {
        alert('Não foi possível salvar as flags. Verifique a migração do banco e tente novamente.');
        console.error(error);
    } finally {
        delete evt.savingFlags;
        renderCalendar();
        if (activeGroupId === groupId && !document.getElementById('cards-popup').classList.contains('hidden')) openPopup(groupId);
    }
}

// 4. INICIALIZAÇÃO E AUTENTICAÇÃO
document.addEventListener('DOMContentLoaded', async () => {
    goToToday();
    
    // Verifica sessão ativa
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        handleLoginSuccess(session.user);
    } else {
        showLoginScreen();
    }

    // Configura form de login
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        let email = document.getElementById('login-email').value.trim().toLowerCase();
        // Permite usar Alias: se a pessoa digitar apenas 'ruivo', o sistema autocompleta para 'ruivo@gmail.com'
        if (!email.includes('@')) {
            email = email === 'desornit' ? 'desornit@prof.educacao.sp.gov.br' : email + '@gmail.com';
        }

        const password = document.getElementById('login-password').value;
        const btn = document.getElementById('login-btn');
        const err = document.getElementById('login-error');
        
        btn.textContent = 'Aguarde...';
        btn.disabled = true;
        err.classList.add('hidden');

        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
        });

        btn.textContent = 'Entrar';
        btn.disabled = false;

        if (error) {
            err.textContent = 'E-mail ou senha incorretos.';
            err.classList.remove('hidden');
        } else {
            handleLoginSuccess(data.user);
        }
    });
});

function isAdminUser(user) {
    return user?.app_metadata?.pec_role === 'admin' || user?.email === 'admin@gmail.com';
}

async function handleLoginSuccess(user) {
    // Renova também o JWT usado nas políticas de acesso do banco.
    // Uma sessão salva pode conter permissões anteriores à promoção para admin.
    try {
        const { data, error } = await supabaseClient.auth.refreshSession();
        if (error || !data?.session?.user) throw error || new Error('Sessão indisponível');
        currentUser = data.session.user;
    } catch (error) {
        console.error('Erro ao atualizar permissões:', error);
        showLoginScreen();
        const message = document.getElementById('login-error');
        message.textContent = 'Não foi possível atualizar sua sessão. Entre novamente para carregar as permissões.';
        message.classList.remove('hidden');
        return;
    }
    document.getElementById('gestor-main').classList.add('hidden');
    document.getElementById('pec-nav-controls').classList.remove('hidden');
    document.getElementById('btn-gestor').classList.add('hidden');
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app-navbar').classList.remove('hidden');
    document.getElementById('app-main').classList.remove('hidden');
    
    // Mostra botão de gestor se for admin/gestor
    if (isAdminUser(currentUser) || currentUser.email === 'gestor@gmail.com') {
        document.getElementById('btn-gestor').classList.remove('hidden');
    }
    
    
    if (isAdminUser(currentUser) && document.getElementById('gestor-main').classList.contains('hidden')) {
        toggleGestorView();
    }

    // Renderiza sidebar bloqueada imediatamente (sem eventos ainda)
    renderSidebarGroups();
    await loadEventsFromDB(); // loadEventsFromDB já chama renderSidebarGroups() ao final
}


async function logout() {
    await supabaseClient.auth.signOut();
    window.location.reload();
}

function showLoginScreen() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('app-navbar').classList.add('hidden');
    document.getElementById('app-main').classList.add('hidden');
}

// 5. OPERAÇÕES NO BANCO DE DADOS (SUPABASE - PEC)
async function loadEventsFromDB() {
    if (!currentUser) return;
    
    const { data, error } = await supabaseClient
        .from('pec_events')
        .select('*');
        
    if (error) {
        console.error('Erro ao carregar eventos:', error);
        alert('Erro ao carregar eventos: ' + error.message);
        return;
    }
    
    scheduledEvents = data || [];
    
    // Limpa prefixo [FORMAÇÃO] legado de text_content (recurso removido)
    scheduledEvents.forEach(async (evt) => {
        if (evt.text_content && /\[FORMAÇÃO\]/i.test(evt.text_content)) {
            const cleaned = evt.text_content.replace(/\s*\[FORMAÇÃO\]\s*/gi, '').trim();
            if (cleaned !== evt.text_content) {
                evt.text_content = cleaned;
                await dbUpdateEvent(evt.id, { text_content: cleaned });
            }
        }
    });
    
    renderCalendar();
    renderSidebarGroups();
}

async function dbInsertEvent(evt) {
    if (!currentUser) return;
    const { data, error } = await supabaseClient
        .from('pec_events')
        .insert([{
            user_id: currentUser.id,
            pec_name: currentUser.email.split('@')[0], // Grava o alias/nome (ex: 'ruivo') na tabela
            event_date: evt.event_date,
            text_content: evt.text_content,
            color_class: evt.color_class,
            group_id: evt.group_id,
            shift: evt.shift
        }])
        .select();
        
    if (error) { console.error('Erro insert:', error); alert('Erro ao salvar no banco: ' + error.message); }
    return data ? data[0] : null;
}

async function dbUpdateEvent(id, updates) {
    const { error } = await supabaseClient
        .from('pec_events')
        .update(updates)
        .eq('id', id);
    if (error) console.error('Erro update:', error);
}

async function dbDeleteEvent(id) {
    const { error } = await supabaseClient
        .from('pec_events')
        .delete()
        .eq('id', id);
    if (error) console.error('Erro delete:', error);
}


// 6. FUNÇÕES DE CALENDÁRIO PEC (NAVEGAÇÃO)
function goToToday() {
    selectedEventId = null;
    currentWeekStart = new Date();
    let day = currentWeekStart.getDay();
    let diff = currentWeekStart.getDate() - day + (day === 0 ? -6 : 1);
    currentWeekStart.setDate(diff);
    renderCalendar();
    renderSidebarGroups();
}

function changeWeek(delta) {
    selectedEventId = null;
    closePopup(true);
    currentWeekStart.setDate(currentWeekStart.getDate() + (delta * 7));
    renderCalendar();
    renderSidebarGroups();
}

// Verifica se há pelo menos um agendamento de Escola, Convocação ou NPE na semana atual
function hasEscolaOuFormacaoNaSemana() {
    const weekDays = [];
    for (let i = 0; i < 6; i++) {
        let d = new Date(currentWeekStart);
        d.setDate(d.getDate() + i);
        weekDays.push(d.toISOString().split('T')[0]);
    }
    const result = scheduledEvents.some(e => {
        if (!weekDays.includes(e.event_date)) return false;
        // Verifica pelo group_id
        if (e.group_id === 'escolas' || e.group_id === 'formacao' || e.group_id === 'formacoes') return true;
        // Fallback: eventos legados que podem não ter group_id definido
        if (e.text_content && e.text_content.includes('EE ')) return true;
        if (e.text_content && e.text_content.toLowerCase() === 'formação') return true;
        return false;
    });
    console.log('[LOCK DEBUG] scheduledEvents:', scheduledEvents.length, '| weekDays:', weekDays, '| isUnlocked:', result);
    return result;
}


// 7. RENDERIZAÇÃO DA SIDEBAR ESTREITA (PEC) COM TRAVA INTELIGENTE
let _prevLockState = null; // rastreia mudança de estado para animação de desbloqueio

function renderSidebarGroups() {
    const sidebar = document.getElementById('groups-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '';

    const isUnlocked = !!selectedPrimaryEvent();

    console.log('[LOCK DEBUG] renderSidebarGroups() → isUnlocked:', isUnlocked);

    // Detecta transição bloqueado → desbloqueado para disparar animação
    const justUnlocked = (_prevLockState === false && isUnlocked === true);
    _prevLockState = isUnlocked;

    // Sincroniza banner informativo (usa style.display para não conflitar com Tailwind)
    const banner = document.getElementById('lock-status-banner');
    if (banner) {
        banner.style.display = isUnlocked ? 'none' : 'flex';
    }

    groups.filter(group => ['escolas', 'formacao', 'npe', 'observacoes'].includes(group.id)).forEach(group => {
        const isKeyGroup = ['escolas', 'formacao', 'npe'].includes(group.id);
        const isLockedGroup = (group.id === 'outros' || group.id === 'acompanhamentos');
        const locked = isLockedGroup && !isUnlocked;

        // Wrapper para capturar cliques no botão bloqueado (pointer-events:none impede eventos no btn)
        let wrapper = document.createElement('div');
        wrapper.className = 'locked-btn-wrapper w-full flex justify-center';
        if (group.id === 'observacoes') wrapper.classList.add('absence-menu-separator');

        let btn = document.createElement('button');
        btn.className = `group-folder relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl shadow-sm border transition-all ${group.colorClass}${locked ? ' is-locked' : ''}`;

        // BACKUP: estilos inline para garantir lock visual mesmo com conflito Tailwind CDN
        if (locked) {
            btn.style.opacity = '0.35';
            btn.style.filter = 'grayscale(1) brightness(0.8)';
            btn.style.pointerEvents = 'none';
            btn.style.cursor = 'not-allowed';
        }

        // Animação de destaque nos botões-chave quando bloqueado
        if (isKeyGroup && !isUnlocked) {
            btn.classList.add('key-btn-pulse', 'key-btn-glow');
        }

        // Animação de desbloqueio nos botões que acabaram de ser liberados
        if (justUnlocked && isLockedGroup) {
            btn.classList.add('unlock-pop');
        }

        let lockIconHtml = locked
            ? `<span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[9px] shadow font-bold z-10"><i class="fa-solid fa-lock"></i></span>`
            : '';

        btn.innerHTML = `
            ${lockIconHtml}
            <i class="fa-solid ${group.icon} text-2xl ${group.textColor} mb-1"></i>
            <span class="text-[8px] font-bold uppercase truncate w-full text-center px-1 ${group.textColor}">${group.name}</span>
        `;

        btn.onclick = (e) => {
            e.stopPropagation();
            if (['formacao', 'npe'].includes(group.id)) {
                closePopup(true);
                return;
            }
            openPopup(group.id);
        };

        if (['formacao', 'npe'].includes(group.id)) {
            btn.draggable = true;
            btn.classList.add('direct-drag-group');
            btn.title = `Arraste ${group.name} diretamente para uma data`;
            btn.setAttribute('aria-label', btn.title);
            btn.addEventListener('dragstart', event => {
                event.dataTransfer.effectAllowed = 'copy';
                event.dataTransfer.setData('text/plain', JSON.stringify({
                    source: 'sidebar', text: group.items[0], colorClass: group.colorClass, groupId: group.id
                }));
                closePopup(true);
            });
        }
        if (group.id === 'formacao') btn.classList.add('convocacao-menu');

        wrapper.appendChild(btn);

        // Trap de clique transparente sobre botão bloqueado (pois pointer-events:none está no btn)
        if (locked) {
            let trap = document.createElement('div');
            trap.className = 'lock-click-trap';
            trap.title = 'Bloqueado: selecione primeiro uma Escola, Convocação ou NPE';
            trap.onclick = (e) => {
                e.stopPropagation();
                showLockToast();
            };
            wrapper.appendChild(trap);
        }

        sidebar.appendChild(wrapper);
    });
}

// Toast imersivo de trava
let _lockToastTimer = null;
function showLockToast() {
    const toast = document.getElementById('lock-toast');
    if (!toast) return;
    toast.classList.add('show');
    clearTimeout(_lockToastTimer);
    _lockToastTimer = setTimeout(() => hideLockToast(), 4000);
}
function hideLockToast() {
    const toast = document.getElementById('lock-toast');
    if (toast) toast.classList.remove('show');
}



// 8. LÓGICA DO POPUP (FLYOUT) DE CARDS
function openPopup(groupId) {
    if (!['escolas', 'formacao', 'npe', 'observacoes'].includes(groupId) && !selectedPrimaryEvent()) {
        showLockToast(); return;
    }
    activeGroupId = groupId;
    const group = groups.find(g => g.id === groupId);
    
    const popup = document.getElementById('cards-popup');
    const title = document.getElementById('popup-title');
    const container = document.getElementById('popup-cards-container');
    const searchInput = document.getElementById('search-input');
    
    title.textContent = group.name;
    title.className = `font-bold text-sm uppercase tracking-wider ${group.textColor}`;
    
    searchInput.value = ''; 
    container.innerHTML = ''; 

    group.items.forEach(itemText => {
        let card = document.createElement('div');
        card.className = `card-item hover-card p-3 rounded-lg shadow-sm font-medium text-sm transition-transform ${group.colorClass}`;
        card.textContent = itemText;
        card.draggable = ['escolas', 'formacao', 'npe', 'observacoes'].includes(groupId);
        if (!card.draggable) {
            card.classList.add('cursor-pointer');
            card.setAttribute('role', 'button');
            card.tabIndex = 0;
            const selected = selectedPrimaryEvent();
            const checked = (selected.flags || []).some(flag => flag.groupId === groupId && flag.label === itemText);
            card.setAttribute('aria-pressed', String(checked));
            card.textContent = (checked ? '✓ ' : '+ ') + itemText;
            card.onclick = () => toggleEventFlag(selected.id, groupId, itemText);
            card.onkeydown = event => {
                if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); card.click(); }
            };
        }
        
        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', JSON.stringify({
                source: 'sidebar',
                text: itemText,
                colorClass: group.colorClass,
                groupId: group.id
            }));
            
            setTimeout(() => {
                card.classList.add('opacity-50');
                closePopup(true); 
            }, 10);
        });
        
        card.addEventListener('dragend', () => {
            card.classList.remove('opacity-50');
        });

        container.appendChild(card);
    });

    popup.classList.remove('hidden');
    setTimeout(() => {
        popup.classList.remove('-translate-x-full');
    }, 10);
    
    setTimeout(() => searchInput.focus(), 300);
}

function closePopup(immediate = false) {
    const popup = document.getElementById('cards-popup');
    popup.classList.add('-translate-x-full');
    if (immediate) {
        popup.classList.add('hidden');
    } else {
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300); 
    }
}

function filterPopupCards() {
    const term = document.getElementById('search-input').value.toLowerCase();
    const container = document.getElementById('popup-cards-container');
    const cards = container.querySelectorAll('.card-item');
    
    cards.forEach(card => {
        if (card.textContent.toLowerCase().includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 9. RENDERIZAÇÃO DO CALENDÁRIO SEMANAL PEC
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    let endOfWeek = new Date(currentWeekStart);
    endOfWeek.setDate(endOfWeek.getDate() + 5);

    document.getElementById('week-label').textContent = 
        `${currentWeekStart.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short'})} a ${endOfWeek.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', year: 'numeric'})}`;

    for (let i = 0; i < 6; i++) {
        let currentDate = new Date(currentWeekStart);
        currentDate.setDate(currentDate.getDate() + i);
        let dateStr = currentDate.toISOString().split('T')[0];
        
        let col = document.createElement('div');
        col.className = 'flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden';
        
        let header = document.createElement('div');
        let isToday = new Date().toISOString().split('T')[0] === dateStr;
        header.className = `p-3 text-center border-b ${isToday ? 'bg-blue-100 text-blue-800' : 'bg-gray-50 text-gray-700'}`;
        header.innerHTML = `<div class="font-bold uppercase text-sm">${daysOfWeek[i]}</div><div class="text-xs ${isToday ? 'font-semibold' : 'text-gray-500'}">${currentDate.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit'})}</div>`;
        col.appendChild(header);
        
        let dropZone = document.createElement('div');
        dropZone.className = 'drop-zone flex-1 p-2 space-y-2 overflow-y-auto';
        dropZone.dataset.date = dateStr;

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('drag-over');
        });
        
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('drag-over');
        });
        
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('drag-over');
            
            const dataStr = e.dataTransfer.getData('text/plain');
            if (dataStr) {
                try {
                    const data = JSON.parse(dataStr);
                    if (data.source === 'sidebar') {
                        addEventToSchedule(dateStr, data.text, data.colorClass, data.groupId);
                    } else if (data.source === 'calendar') {
                        moveEvent(data.eventId, dateStr);
                    }
                } catch(err) {}
            }
        });

        const dayEvents = scheduledEvents.filter(e => e.event_date === dateStr);
        dayEvents.forEach(evt => {
            dropZone.appendChild(createScheduledCard(evt));
        });

        col.appendChild(dropZone);
        grid.appendChild(col);
    }
}

// Alterna ou define a tag de Formação no evento (mesclagem de Escola + Formação)
async function toggleEventFormacaoTag(id) {
    const evt = scheduledEvents.find(e => e.id === id);
    if (!evt) return;

    const hasTag = evt.text_content.includes('[FORMAÇÃO]') || evt.text_content.includes('[Formação]');
    if (hasTag) {
        evt.text_content = evt.text_content.replace(/\s*\[FORMAÇÃO\]\s*/gi, ' ').trim();
    } else {
        evt.text_content = `[FORMAÇÃO] ${evt.text_content}`.trim();
    }

    renderCalendar();
    renderSidebarGroups();
    await dbUpdateEvent(id, { text_content: evt.text_content });
}

// 10. LÓGICA DE AGENDAMENTO, MOVER E INLINE EDIT (COM DB)
async function addEventToSchedule(dateStr, text, colorClass, groupId) {
    if (!currentUser || !['escolas', 'formacao', 'npe', 'observacoes'].includes(groupId)) { showLockToast(); return; }
    // Se arrastar o card 'Formação' sobre um card de escola existente naquele mesmo dia/turno, mescla ou cria
    const tempEvent = {
        id: 'temp_' + Date.now(), 
        event_date: dateStr,
        text_content: text,
        color_class: colorClass,
        group_id: groupId,
        shift: 'Manhã',
        pec_name: currentUser.email.split('@')[0]
    };
    
    scheduledEvents.push(tempEvent);
    renderCalendar();
    renderSidebarGroups(); // Atualiza trava dos botões
    
    const dbEvent = await dbInsertEvent(tempEvent);
    if (dbEvent) {
        const idx = scheduledEvents.findIndex(e => e.id === tempEvent.id);
        if (idx !== -1) scheduledEvents[idx] = dbEvent;
        selectedEventId = dbEvent.id;
        renderCalendar(); 
        renderSidebarGroups();
    } else {
        scheduledEvents = scheduledEvents.filter(evt => evt.id !== tempEvent.id);
        renderCalendar();
        renderSidebarGroups();
    }
}

async function moveEvent(id, newDateStr) {
    const evt = scheduledEvents.find(e => e.id === id);
    if (evt && evt.event_date !== newDateStr) {
        evt.event_date = newDateStr;
        renderCalendar(); 
        renderSidebarGroups(); // Atualiza trava caso mude de semana
        await dbUpdateEvent(id, { event_date: newDateStr });
    }
}

function applyNotesStyle(element, style = {}) {
    element.style.fontWeight = style?.bold === true ? '700' : '400';
    element.style.color = style?.color === 'red' ? '#dc2626' : '#000000';
}
async function updateEventNotes(id, notes, style = {}) {
    const evt = scheduledEvents.find(item => item.id === id);
    if (!evt || evt.user_id !== currentUser?.id || String(id).startsWith('temp_')) {
        throw new Error('Este card não pode ser editado.');
    }
    const { data, error } = await supabaseClient.from('pec_events')
        .update({ notes, notes_style: { bold: style.bold === true, color: style.color === 'red' ? 'red' : 'black' } }).eq('id', id).eq('user_id', currentUser.id).select('id');
    if (error || !data?.length) throw error || new Error('Registro não atualizado.');
    evt.notes = notes;
    evt.notes_style = { bold: style.bold === true, color: style.color === 'red' ? 'red' : 'black' };
}

async function updateEventShift(id) {
    const evt = scheduledEvents.find(e => e.id === id);
    if (evt) {
        if (evt.shift === 'Manhã') evt.shift = 'Tarde';
        else if (evt.shift === 'Tarde') evt.shift = 'Noite';
        else evt.shift = 'Manhã';
        
        renderCalendar();
        await dbUpdateEvent(id, { shift: evt.shift });
    }
}

async function removeEvent(id) {
    const evt = scheduledEvents.find(item => item.id === id);
    if (!evt || evt.deleting || evt.user_id !== currentUser?.id || String(id).startsWith('temp_')) return;
    // NPE: exclusão direta sem confirmação (card simples)
    if (evt.group_id !== 'npe') {
        if (!window.confirm(`Excluir o card "${evt.text_content || 'Atividade'}"? As flags e observações também serão apagadas.`)) return;
    }
    evt.deleting = true;
    try {
        const {data, error} = await supabaseClient.from('pec_events').delete()
            .eq('id', id).eq('user_id', currentUser.id).select('id');
        if (error || !data?.length) throw error || new Error('Registro não excluído.');
        scheduledEvents = scheduledEvents.filter(item => item.id !== id);
        if (selectedEventId === id) selectedEventId = null;
        renderCalendar();
        renderSidebarGroups();
    } catch (error) {
        console.error(error);
        alert('Não foi possível excluir o card. Tente novamente.');
    } finally {
        delete evt.deleting;
    }
}

function createScheduledCard(evt) {
    // ── NPE: Card simplificado (apenas turno + excluir) ──
    if (evt.group_id === 'npe') {
        return createNpeCard(evt);
    }

    let cardWrapper = document.createElement('div');
    cardWrapper.className = `group flex flex-col relative p-3 pb-2 rounded-lg shadow-sm border text-sm font-medium transition-all cursor-grab active:cursor-grabbing hover:shadow-md ${evt.color_class}`;
    cardWrapper.draggable = true;
    cardWrapper.classList.add('pec-card');
    if (evt.group_id === 'observacoes') cardWrapper.classList.add('absence-card');
    if (selectedEventId === evt.id) cardWrapper.classList.add('pec-card-selected');
    const ownCard = evt.user_id === currentUser?.id;
    let flagButton = null;
    if (isPrimaryEvent(evt) && ownCard && !String(evt.id).startsWith('temp_')) {
        flagButton = document.createElement('button');
        flagButton.className = 'pec-add-flags';
        const count = Array.isArray(evt.flags) ? evt.flags.length : 0;
        flagButton.textContent = count ? `⚑ Gerenciar flags · ${count}` : '+ Adicionar flags';
        flagButton.dataset.flagEvent = evt.id;
        flagButton.onclick = event => { event.stopPropagation(); openFlagEditor(evt.id); };
    }

    cardWrapper.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({
            source: 'calendar',
            eventId: evt.id
        }));
        setTimeout(() => cardWrapper.classList.add('opacity-50'), 10);
    });

    cardWrapper.addEventListener('dragend', () => {
        cardWrapper.classList.remove('opacity-50');
    });

    // Tag de formação apenas para eventos do grupo 'formacao'
    const isFormacao = evt.group_id === 'formacao';

    // Linha de tag no topo do card (somente grupo formação)
    let tagHeaderDiv = document.createElement('div');
    tagHeaderDiv.className = "flex items-center gap-1.5 mb-1.5 flex-wrap";

    if (isPrimaryEvent(evt) || evt.group_id === 'observacoes') {
        let tagBadge = document.createElement('span');
        tagBadge.className = "tag-formacao";
        tagBadge.innerHTML = `<i class="fa-solid fa-graduation-cap text-[9px]"></i> Formação`;
        tagBadge.textContent = groups.find(group => group.id === evt.group_id)?.name || 'Atividade';
        if (evt.group_id === 'npe') tagBadge.className = 'pec-flag bg-outros';
        if (evt.group_id === 'observacoes') tagBadge.className = 'pec-flag bg-observacoes';
        tagHeaderDiv.appendChild(tagBadge);
    }

    let textDiv = document.createElement('div');
    textDiv.textContent = evt.text_content || '';
    textDiv.className = "pr-6 break-words mb-2 font-semibold";

    const notesSection = document.createElement('div');
    notesSection.className = 'pec-notes';
    const notesText = document.createElement('p');
    notesText.className = 'pec-notes-text';
    notesText.textContent = evt.notes || '';
    applyNotesStyle(notesText, evt.notes_style);
    notesSection.hidden = !evt.notes;
    notesSection.appendChild(notesText);

    // Barra de rodapé do Card (Turno + Botão Excluir)
    let footerDiv = document.createElement('div');
    footerDiv.className = "flex items-center justify-between gap-1 mt-auto pt-1 border-t border-black/5";

    let shiftBtn = document.createElement('button');
    let shiftIcons = {
        'Manhã': '<i class="fa-regular fa-sun text-orange-500"></i> Manhã',
        'Tarde': '<i class="fa-solid fa-cloud-sun text-yellow-600"></i> Tarde',
        'Noite': '<i class="fa-solid fa-moon text-blue-500"></i> Noite'
    };
    
    if(!evt.shift) evt.shift = 'Manhã'; 

    shiftBtn.innerHTML = shiftIcons[evt.shift];
    shiftBtn.className = "text-[10px] uppercase font-bold text-black/60 hover:text-black/90 bg-white/50 hover:bg-white/80 px-2 py-0.5 rounded transition-colors flex items-center gap-1";
    shiftBtn.title = "Clique para mudar o turno";
    
    shiftBtn.onclick = (e) => {
        e.stopPropagation();
        updateEventShift(evt.id);
    };

    footerDiv.appendChild(shiftBtn);
    const person = document.createElement('span');
    person.className = 'pec-person';
    const name = evt.pec_name || 'PEC';
    const avatar = document.createElement('span');
    avatar.className = 'pec-avatar';
    avatar.textContent = name.slice(0, 2).toUpperCase();
    const personName = document.createElement('span');
    personName.textContent = name + (ownCard ? ' · você' : '');
    person.append(personName, avatar);
    footerDiv.appendChild(person);
    const editButton = document.createElement('button');
    editButton.className = 'pec-edit';
    editButton.textContent = evt.notes ? 'Editar observações' : '+ Adicionar observações';
    editButton.disabled = !ownCard || String(evt.id).startsWith('temp_');
    editButton.onclick = event => {
        event.stopPropagation();
        if (notesSection.querySelector('textarea')) return;
        notesSection.hidden = false;
        notesText.hidden = true;
        cardWrapper.draggable = false;
        editButton.hidden = true;
        const editor = document.createElement('div');
        const input = document.createElement('textarea');
        input.className = 'pec-notes-input';
        input.rows = 3;
        input.value = evt.notes || '';
        input.placeholder = 'Descreva os detalhes desta atividade…';
        input.setAttribute('aria-label', 'Observações da atividade');
        const formatBar = document.createElement('div');
        formatBar.className = 'pec-notes-format';
        let noteBold = evt.notes_style?.bold === true;
        let noteColor = evt.notes_style?.color === 'red' ? 'red' : 'black';
        const weight = document.createElement('button');
        weight.type = 'button';
        weight.className = 'pec-format-icon';
        weight.innerHTML = '<i class="fa-solid fa-bold" aria-hidden="true"></i>';
        weight.title = 'Negrito: ativar ou desativar';
        weight.setAttribute('aria-label', 'Negrito');
        const colorButtons = ['black', 'red'].map(value => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'pec-format-icon';
            button.innerHTML = '<i class="fa-solid fa-font" aria-hidden="true"></i>';
            button.style.color = value === 'red' ? '#dc2626' : '#000000';
            button.title = value === 'red' ? 'Texto vermelho' : 'Texto preto';
            button.setAttribute('aria-label', button.title);
            button.onclick = () => { noteColor = value; refreshFormat(); };
            return button;
        });
        const draftStyle = () => ({bold: noteBold, color: noteColor});
        const refreshFormat = () => {
            weight.setAttribute('aria-pressed', String(noteBold));
            colorButtons.forEach((button,index) => button.setAttribute('aria-pressed', String(noteColor === ['black','red'][index])));
            applyNotesStyle(input, draftStyle());
        };
        weight.onclick = () => { noteBold = !noteBold; refreshFormat(); };
        const disableFormat = disabled => [weight, ...colorButtons].forEach(button => button.disabled = disabled);
        refreshFormat();
        formatBar.setAttribute('role', 'group');
        formatBar.setAttribute('aria-label', 'Formatação das observações');
        formatBar.append(weight, ...colorButtons);
        const controls = document.createElement('div');
        controls.className = 'pec-card-actions';
        const save = document.createElement('button');
        save.className = 'pec-add-flags';
        save.textContent = 'Salvar';
        const cancel = document.createElement('button');
        cancel.className = 'pec-edit';
        cancel.textContent = 'Cancelar';
        const errorText = document.createElement('p');
        errorText.className = 'pec-notes-error';
        errorText.setAttribute('role', 'alert');
        const finish = () => {
            editor.remove();
            notesText.textContent = evt.notes || '';
    applyNotesStyle(notesText, evt.notes_style);
            notesText.hidden = false;
            notesSection.hidden = !evt.notes;
            cardWrapper.draggable = true;
            editButton.hidden = false;
            editButton.textContent = evt.notes ? 'Editar observações' : '+ Adicionar observações';
            editButton.focus();
        };
        cancel.onclick = finish;
        save.onclick = async () => {
            save.disabled = cancel.disabled = input.disabled = true;
            disableFormat(true);
            save.textContent = 'Salvando…';
            errorText.textContent = '';
            try {
                await updateEventNotes(evt.id, input.value.trim(), draftStyle());
                finish();
            } catch (error) {
                console.error(error);
                errorText.textContent = 'Não foi possível salvar. Seu texto foi mantido; tente novamente.';
                save.disabled = cancel.disabled = input.disabled = false;
                disableFormat(false);
                save.textContent = 'Salvar';
            }
        };
        input.onkeydown = event => {
            if (event.key === 'Escape') { event.preventDefault(); finish(); }
            if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { event.preventDefault(); save.click(); }
        };
        controls.append(save, cancel);
        editor.append(formatBar, input, controls, errorText);
        notesSection.appendChild(editor);
        input.focus();
    };

    const flagList = document.createElement('div');
    flagList.className = 'pec-flags';
    (Array.isArray(evt.flags) ? evt.flags : []).forEach(flag => {
        const group = groups.find(item => item.id === flag.groupId);
        if (!group) return;
        const badge = document.createElement('button');
        badge.className = 'pec-flag ' + group.colorClass;
        badge.textContent = flag.label;
        badge.setAttribute('aria-label', group.name + ': ' + flag.label + '. Gerenciar flags');
        badge.title = group.name + ' · Gerenciar flags';
        badge.disabled = !ownCard;
        badge.onclick = event => { event.stopPropagation(); openFlagEditor(evt.id); };
        flagList.appendChild(badge);
    });


    let delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa-solid fa-times"></i>';
    delBtn.className = "absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/5 text-black/40 hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center";
    delBtn.setAttribute('aria-label', 'Excluir card');
    delBtn.disabled = !ownCard || String(evt.id).startsWith('temp_');
    delBtn.onclick = (e) => {
        e.stopPropagation();
        removeEvent(evt.id);
    };

    if (tagHeaderDiv.children.length > 0) {
        cardWrapper.appendChild(tagHeaderDiv);
    }
    cardWrapper.appendChild(textDiv);
    cardWrapper.appendChild(flagList);
    cardWrapper.appendChild(notesSection);
    const actions = document.createElement('div');
    actions.className = 'pec-card-actions';
    if (flagButton) actions.appendChild(flagButton);
    actions.appendChild(editButton);
    cardWrapper.appendChild(actions);
    cardWrapper.appendChild(footerDiv);
    cardWrapper.appendChild(delBtn);

    return cardWrapper;
}

// ── Card simplificado para NPE (só turno + excluir) ──
function createNpeCard(evt) {
    const ownCard = evt.user_id === currentUser?.id;
    const card = document.createElement('div');
    card.className = `group relative flex items-center gap-2 px-3 py-2 rounded-lg shadow-sm border text-sm font-semibold transition-all cursor-grab active:cursor-grabbing hover:shadow-md ${evt.color_class}`;
    card.draggable = true;
    if (selectedEventId === evt.id) card.style.outline = '2px solid #2563eb';

    card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'calendar', eventId: evt.id }));
        setTimeout(() => card.classList.add('opacity-50'), 10);
    });
    card.addEventListener('dragend', () => card.classList.remove('opacity-50'));

    // Clique seleciona como evento primário
    card.onclick = () => { selectedEventId = evt.id; renderCalendar(); renderSidebarGroups(); };

    // Texto fixo
    const text = document.createElement('span');
    text.textContent = 'NPE';
    text.className = 'flex-1 truncate';

    // Turno
    if (!evt.shift) evt.shift = 'Manhã';
    const shiftBtn = document.createElement('button');
    const icons = {
        'Manhã': '<i class="fa-regular fa-sun text-orange-500"></i>',
        'Tarde': '<i class="fa-solid fa-cloud-sun text-yellow-600"></i>',
        'Noite': '<i class="fa-solid fa-moon text-blue-500"></i>'
    };
    shiftBtn.innerHTML = icons[evt.shift];
    shiftBtn.className = 'w-6 h-6 flex items-center justify-center rounded hover:bg-white/60 transition';
    shiftBtn.title = evt.shift + ' — clique para alternar';
    shiftBtn.onclick = e => { e.stopPropagation(); updateEventShift(evt.id); };

    // Excluir
    const del = document.createElement('button');
    del.innerHTML = '<i class="fa-solid fa-times"></i>';
    del.className = 'w-5 h-5 rounded-full bg-black/5 text-black/30 hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-xs';
    del.setAttribute('aria-label', 'Excluir NPE');
    del.disabled = !ownCard || String(evt.id).startsWith('temp_');
    del.onclick = e => { e.stopPropagation(); removeEvent(evt.id); };

    card.append(text, shiftBtn, del);
    return card;
}

// ==========================================
// 11. LÓGICA DO GESTOR AVANÇADA (Filtros, Dia, Semana, Mês)
// ==========================================
let currentGestorDate = new Date();
let allGestorEvents = [];
let gestorViewType = 'month'; // 'month', 'week', 'day'

function toggleGestorView() {
    const isGestor = !document.getElementById("gestor-main").classList.contains("hidden");
    if (isGestor) {
        document.getElementById("gestor-main").classList.add("hidden");
        document.getElementById("app-main").classList.remove("hidden");
        document.getElementById("pec-nav-controls").classList.remove("hidden");
        document.getElementById("btn-gestor").innerHTML = `<i class="fa-solid fa-chart-pie"></i> Painel Gestor`;
    } else {
        document.getElementById("app-main").classList.add("hidden");
        document.getElementById("pec-nav-controls").classList.add("hidden");
        document.getElementById("gestor-main").classList.remove("hidden");
        document.getElementById("btn-gestor").innerHTML = `<i class="fa-solid fa-calendar"></i> Voltar para Agenda`;
        loadGestorEvents();
    }
}

let gestorLoading = false;
let modalDayEvents = [];
let modalCurrentShiftFilter = 'all';
let modalCurrentPecFilter = 'all';
const gestorDateKey = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
function gestorPeriod() {
    const start = new Date(currentGestorDate.getFullYear(), currentGestorDate.getMonth(), currentGestorDate.getDate());
    const end = new Date(start);
    if (gestorViewType === 'month' || gestorViewType === 'list') {
        start.setDate(1); end.setMonth(end.getMonth()+1, 0);
    } else if (gestorViewType === 'week') {
        start.setDate(start.getDate()-start.getDay()); end.setTime(start.getTime()); end.setDate(end.getDate()+6);
    }
    return {start, end};
}
async function loadGestorEvents() {
    if (gestorLoading) return;
    gestorLoading = true;
    const status = document.getElementById('gestor-status');
    const button = document.getElementById('gestor-refresh');
    button.disabled = true;
    status.textContent = 'Atualizando atividades…';
    try {
        const {start, end} = gestorPeriod();
        const collected = [];
        // Pagina o período para evitar truncamento pelo limite padrão do Supabase.
        for (let offset = 0; ; offset += 500) {
            const {data, error} = await supabaseClient.from('pec_events').select('*')
                .gte('event_date', gestorDateKey(start)).lte('event_date', gestorDateKey(end))
                .order('event_date').order('id').range(offset, offset+499);
            if (error) throw error;
            collected.push(...(data || []));
            if (!data || data.length < 500) break;
        }
        allGestorEvents = collected;
        const select = document.getElementById('gestor-pec-filter');
        const previous = select.value;
        const names = new Set(collected.map(evt => evt.pec_name?.toLowerCase()).filter(Boolean));
        if (previous !== 'all') names.add(previous);
        select.replaceChildren(new Option('Todos os PECs', 'all'));
        Array.from(names).sort().forEach(name => select.add(new Option(name.toUpperCase(), name)));
        select.value = previous || 'all';
        // Popula filtro de escolas com todas as escolas da rede + escolas nos agendamentos
        const schoolSelect = document.getElementById('gestor-school-filter');
        if (schoolSelect) {
            const prevSchool = schoolSelect.value;
            const defaultSchools = groups.find(g => g.id === 'escolas')?.items || [];
            const collectedSchools = collected
                .filter(evt => evt.group_id === 'escolas' || (evt.text_content && evt.text_content.startsWith('EE ')))
                .map(evt => evt.text_content)
                .filter(Boolean);
            const schools = new Set([...defaultSchools, ...collectedSchools, ...(prevSchool && prevSchool !== 'all' ? [prevSchool] : [])]);
            schoolSelect.replaceChildren(new Option('Todas as escolas', 'all'));
            Array.from(schools).sort((a, b) => a.localeCompare(b)).forEach(name => schoolSelect.add(new Option(name, name)));
            schoolSelect.value = prevSchool || 'all';
            filterGestorSchoolOptions();
        }

        status.textContent = 'Atualizado às ' + new Date().toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'});
        renderGestorCalendar();
    } catch (error) {
        console.error(error);
        allGestorEvents = [];
        renderGestorCalendar();
        status.textContent = 'Não foi possível carregar este período. Clique em Atualizar para tentar novamente.';
    } finally {
        gestorLoading = false;
        button.disabled = false;
    }
}
function setGestorView(type) {
    if (gestorLoading || !['month','week','day','list'].includes(type)) return;
    gestorViewType = type;
    ['month','week','day','list'].forEach(view => {
        const btn = document.getElementById('btn-view-'+view);
        btn.className = 'gestor-view-button' + (type === view ? ' active' : '');
        btn.setAttribute('aria-pressed', String(type === view));
    });
    loadGestorEvents();
}
function changeGestorDate(delta) {
    if (gestorLoading) return;
    if (['month','list'].includes(gestorViewType)) {
        currentGestorDate = new Date(currentGestorDate.getFullYear(), currentGestorDate.getMonth()+delta, 1);
    } else currentGestorDate.setDate(currentGestorDate.getDate()+delta*(gestorViewType === 'week' ? 7 : 1));
    loadGestorEvents();
}
function gestorToday() {
    if (gestorLoading) return;
    currentGestorDate = new Date(); loadGestorEvents();
}
function clearGestorFilters() {
    ['pec','shift','type','school','flag'].forEach(name => document.getElementById('gestor-'+name+'-filter').value = 'all');
    document.getElementById('gestor-search').value = '';
    document.getElementById('gestor-school-search').value = '';
    filterGestorSchoolOptions();
    renderGestorCalendar();
}
function getFilteredGestorEvents() {
    const value = name => document.getElementById('gestor-'+name+'-filter')?.value;
    const term = normalizeFlagSearch(document.getElementById('gestor-search').value.trim());
    const {start,end} = gestorPeriod();
    const from = gestorDateKey(start), to = gestorDateKey(end);
    const shifts = {'Manhã':0, 'Tarde':1, 'Noite':2};
    return allGestorEvents.filter(evt => {
        const flags = Array.isArray(evt.flags) ? evt.flags : [];
        return evt.event_date >= from && evt.event_date <= to &&
            (value('pec') === 'all' || evt.pec_name?.toLowerCase() === value('pec')) &&
            (value('shift') === 'all' || (evt.shift || 'Manhã') === value('shift')) &&
            (value('type') === 'all' || evt.group_id === value('type')) &&
            (value('school') === 'all' || (evt.text_content && evt.text_content.trim() === value('school').trim())) &&
            (value('flag') === 'all' || (value('flag') === 'none' ? !flags.length : (flags.some(flag => flag.groupId === value('flag')) || (value('flag') === 'observacoes' && evt.group_id === 'observacoes')))) &&
            (!term || normalizeFlagSearch([evt.pec_name, evt.text_content, evt.notes, ...flags.map(flag => flag.label)].join(' ')).includes(term));
    }).sort((a,b) => a.event_date.localeCompare(b.event_date) ||
        (shifts[a.shift || 'Manhã'] ?? 3)-(shifts[b.shift || 'Manhã'] ?? 3) || (a.pec_name || '').localeCompare(b.pec_name || ''));
}
function createGestorEventCard(evt, compact = false) {
    const palette = isOccurrenceEvent(evt) ? {gradient:'linear-gradient(135deg, #b91c1c, #ef4444)', bg:'#fff1f2', border:'#dc2626', tagColor:'#991b1b'} : PEC_PALETTES[pecColorIndex(evt.pec_name)];
    const card = document.createElement('article');
    card.className = 'gestor-event-card' + (compact ? ' compact' : '');
    card.style.borderLeft = `5px solid ${palette.border}`;

    // Banner com mosaico geométrico e destaque para o PEC
    const banner = document.createElement('div');
    banner.className = 'gestor-pec-banner';
    banner.style.background = palette.gradient;

    // Mosaico de losangos (quadrados inclinados a 45 graus)
    const mosaic = document.createElement('div');
    mosaic.className = 'gestor-banner-mosaic';
    mosaic.innerHTML = `
        <span class="gestor-mosaic-diamond d1"></span>
        <span class="gestor-mosaic-diamond d2"></span>
        <span class="gestor-mosaic-diamond d3"></span>
        <span class="gestor-mosaic-diamond d4"></span>
        <span class="gestor-mosaic-diamond d5"></span>
    `;
    banner.appendChild(mosaic);

    // Tag destacada com o nome do PEC
    const pecTag = document.createElement('div');
    pecTag.className = 'gestor-pec-tag';
    pecTag.style.color = palette.tagColor || palette.border;
    pecTag.innerHTML = `
        <i class="fa-solid fa-user-tie"></i>
        <span>${(evt.pec_name || 'PEC').toUpperCase()}</span>
    `;
    banner.appendChild(pecTag);

    // Lado direito do banner: Turno
    const shiftIcons = {
        'Manhã': 'fa-regular fa-sun',
        'Tarde': 'fa-solid fa-cloud-sun',
        'Noite': 'fa-solid fa-moon'
    };
    const bannerMeta = document.createElement('div');
    bannerMeta.className = 'gestor-banner-meta';
    bannerMeta.innerHTML = `<i class="${shiftIcons[evt.shift] || 'fa-regular fa-clock'}"></i> <span>${evt.shift || 'Manhã'}</span>`;
    banner.appendChild(bannerMeta);

    // Corpo do card
    const body = document.createElement('div');
    body.className = 'gestor-card-body';
    body.style.background = palette.bg;

    // Título do card (Escola ou Atividade)
    const title = document.createElement('h4');
    title.className = 'gestor-card-title';
    title.textContent = evt.text_content || 'Atividade';

    // Sub-informações: Tipo e data formatada
    const metaRow = document.createElement('div');
    metaRow.className = 'flex items-center gap-2 mb-2 flex-wrap';

    const typeBadge = document.createElement('span');
    typeBadge.className = 'gestor-type text-[10px] font-bold px-2 py-0.5 rounded-md';
    typeBadge.style.backgroundColor = 'rgba(0,0,0,0.05)';
    typeBadge.style.color = palette.tagColor || '#4338ca';
    typeBadge.textContent = groups.find(group => group.id === evt.group_id)?.name || 'ATIVIDADE';
    metaRow.appendChild(typeBadge);

    const dateFormatted = evt.event_date ? evt.event_date.split('-').reverse().join('/') : '';
    const dateSpan = document.createElement('span');
    dateSpan.className = 'text-[11px] text-slate-500 font-medium';
    dateSpan.textContent = dateFormatted;
    metaRow.appendChild(dateSpan);

    body.append(title, metaRow);

    // Flags
    const flags = Array.isArray(evt.flags) ? evt.flags : [];
    if (flags.length > 0) {
        const flagsContainer = document.createElement('div');
        flagsContainer.className = 'pec-flags mb-2';
        flags.forEach(flag => {
            const badge = document.createElement('span');
            const group = groups.find(item => item.id === flag.groupId);
            badge.className = 'pec-flag ' + (group?.colorClass || '');
            badge.textContent = flag.label;
            badge.title = group?.name || 'Flag';
            flagsContainer.appendChild(badge);
        });
        body.appendChild(flagsContainer);
    }

    // Observações
    if (evt.notes) {
        const notes = document.createElement('p');
        notes.className = 'gestor-event-notes mt-2 pt-2 border-t border-black/5';
        notes.textContent = evt.notes;
        applyNotesStyle(notes, evt.notes_style);
        body.appendChild(notes);
    }

    card.append(banner, body);
    return card;
}
function renderGestorCalendar() {
    const grid = document.getElementById('gestor-calendar-grid');
    const header = document.getElementById('gestor-grid-header');
    const events = getFilteredGestorEvents();
    renderGestorOccurrences();
    const activeFilters = ['pec','shift','type','school','flag'].filter(name => document.getElementById('gestor-'+name+'-filter')?.value !== 'all').length + (document.getElementById('gestor-search').value.trim() ? 1 : 0);
    document.getElementById('gestor-filter-summary').textContent = activeFilters ? `${activeFilters} filtro(s) ativo(s) · expandir para ajustar` : 'Expandir opções de consulta';
    const {start,end} = gestorPeriod();
    const format = date => date.toLocaleDateString('pt-BR', {day:'2-digit',month:'short'});
    document.getElementById('gestor-date-label').textContent = ['month','list'].includes(gestorViewType)
        ? start.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}) : `${format(start)} – ${format(end)} / ${end.getFullYear()}`;
    const stats = [events.length, new Set(events.map(evt => evt.user_id || evt.pec_name)).size,
        events.filter(evt => evt.group_id === 'escolas').length,
        events.filter(evt => evt.group_id === 'observacoes' || (evt.flags || []).some(flag => flag.groupId === 'observacoes')).length];
    ['total','pecs','schools','occurrences'].forEach((name,index) => document.getElementById('gestor-stat-'+name).textContent = stats[index]);
    document.getElementById('gestor-results').textContent = `${events.length} atividade(s) com os filtros atuais · indicadores deste período`;
    grid.replaceChildren();
    const byDate = new Map();
    events.forEach(evt => { if (!byDate.has(evt.event_date)) byDate.set(evt.event_date, []); byDate.get(evt.event_date).push(evt); });
    const calendar = ['month','week'].includes(gestorViewType);
    header.classList.toggle('hidden', !calendar);
    if (calendar) {
        grid.className = 'gestor-calendar-month';
        if (gestorViewType === 'month') for (let i=0;i<start.getDay();i++) {
            const blank = document.createElement('div'); blank.className = 'gestor-blank'; grid.appendChild(blank);
        }
        for (let date=new Date(start);date<=end;date.setDate(date.getDate()+1)) {
            const key = gestorDateKey(date), items = byDate.get(key) || [];
            const cell = document.createElement('div'); cell.className = 'gestor-day-cell gestor-new-cell';
            const button = document.createElement('button'); button.className = 'gestor-date-tile';
            const today = key === gestorDateKey(new Date());
            button.classList.toggle('is-today', today);
            const top = document.createElement('span'); top.className = 'gestor-date-top';
            const number = document.createElement('span'); number.className = 'gestor-date-number'; number.textContent = date.getDate();
            top.appendChild(number);
            if (today) { const label = document.createElement('span'); label.className = 'gestor-today-label'; label.textContent = 'Hoje'; top.appendChild(label); }
            const count = document.createElement('span'); count.className = 'gestor-date-count' + (items.length ? ' has-items' : '');
            count.textContent = items.length ? `${items.length} agendamento${items.length === 1 ? '' : 's'}` : 'Sem agendamentos';
            const hint = document.createElement('span'); hint.className = 'gestor-date-hint'; hint.textContent = items.length ? 'Abrir agenda →' : 'Ver dia →';
            button.append(top, count);
            const occurrences = items.filter(isOccurrenceEvent).length;
            if (occurrences) {
                const badge = document.createElement('span'); badge.className = 'gestor-day-occurrences';
                badge.textContent = `${occurrences} ocorrência${occurrences === 1 ? '' : 's'}`;
                button.appendChild(badge);
            }
            button.appendChild(hint);
            button.setAttribute('aria-label', `${date.toLocaleDateString('pt-BR')}: ${count.textContent}. Abrir detalhes`);
            button.onclick = () => openDayEventsModal(key, items);
            cell.appendChild(button);
            grid.appendChild(cell);
        }
    } else {
        grid.className = 'gestor-agenda-list';
        if (!events.length) grid.textContent = 'Nenhuma atividade encontrada. Ajuste os filtros ou escolha outro período.';
        byDate.forEach((items,key) => {
            const section = document.createElement('section');
            const title = document.createElement('h3'); title.textContent = key.split('-').reverse().join('/')+' · '+items.length+' atividade(s)';
            const cards = document.createElement('div'); cards.className = 'gestor-list-cards';
            items.forEach(evt => cards.appendChild(createGestorEventCard(evt)));
            section.append(title,cards);grid.appendChild(section);
        });
    }
}

let modalSelectedDate = null;
let modalReturnFocus = null;
function toggleGestorTools() { toggleGestorPanel('filters'); }
function toggleGestorPanel(target) {
    const panels = [
        {key:'filters', button:'gestor-tools-toggle', body:'gestor-tools-body', panel:'gestor-filter-panel'},
        {key:'occurrences', button:'gestor-occurrences-toggle', body:'gestor-occurrences-body', panel:'gestor-occurrence-panel'}
    ];
    const selected = panels.find(panel => panel.key === target);
    const expand = document.getElementById(selected.button).getAttribute('aria-expanded') !== 'true';
    panels.forEach(panel => {
        const open = panel.key === target && expand;
        document.getElementById(panel.button).setAttribute('aria-expanded', String(open));
        const body = document.getElementById(panel.body);
        body.inert = !open;
        body.classList.toggle('expanded', open);
        document.getElementById(panel.panel).classList.toggle('is-expanded', open);
    });
}
function isOccurrenceEvent(evt) {
    return evt.group_id === 'observacoes' || (Array.isArray(evt.flags) && evt.flags.some(flag => flag.groupId === 'observacoes'));
}
function getPeriodOccurrences() {
    const {start,end} = gestorPeriod();
    const from = gestorDateKey(start), to = gestorDateKey(end);
    return allGestorEvents.filter(evt => isOccurrenceEvent(evt) && evt.event_date >= from && evt.event_date <= to)
        .sort((a,b) => a.event_date.localeCompare(b.event_date) || (a.pec_name || '').localeCompare(b.pec_name || ''));
}
function renderGestorOccurrences() {
    const events = getPeriodOccurrences();
    document.getElementById('gestor-occurrences-summary').textContent = `${events.length} ocorrência(s) no período · expandir para consultar`;
    const list = document.getElementById('gestor-occurrences-list');
    list.replaceChildren();
    if (!events.length) {
        const empty = document.createElement('p'); empty.className = 'gestor-occurrence-empty';
        empty.textContent = 'Nenhuma ocorrência registrada neste período.'; list.appendChild(empty);
    }
    events.forEach(evt => {
        const card = createGestorEventCard(evt);
        const button = document.createElement('button'); button.className = 'gestor-occurrence-open';
        button.textContent = 'Ver agendamentos deste dia →';
        button.onclick = () => openDayEventsModal(evt.event_date, allGestorEvents.filter(item => item.event_date === evt.event_date));
        card.querySelector('.gestor-card-body').appendChild(button);
        list.appendChild(card);
    });
}
function navigateModalDay(delta) {
    const date = new Date(modalSelectedDate + 'T12:00:00');
    date.setDate(date.getDate() + delta);
    const key = gestorDateKey(date), {start, end} = gestorPeriod();
    if (key < gestorDateKey(start) || key > gestorDateKey(end)) return;
    const shift = modalCurrentShiftFilter;
    const pec = modalCurrentPecFilter;
    openDayEventsModal(key, getFilteredGestorEvents().filter(evt => evt.event_date === key));
    filterModalShift(shift);
    filterModalPec(pec);
}
function openDayEventsModal(dateStr, dayEvents) {
    if (!document.getElementById('day-events-modal').classList.contains('open')) modalReturnFocus = document.activeElement;
    modalSelectedDate = dateStr;
    const {start, end} = gestorPeriod();
    document.getElementById('modal-prev-day').disabled = dateStr <= gestorDateKey(start);
    document.getElementById('modal-next-day').disabled = dateStr >= gestorDateKey(end);
    modalDayEvents = dayEvents;
    modalCurrentShiftFilter = 'all';
    modalCurrentPecFilter = 'all';

    // Popula dropdown de filtro por PEC dentro do modal
    const pecSelect = document.getElementById('modal-pec-filter');
    if (pecSelect) {
        pecSelect.replaceChildren(new Option(`Todos os PECs (${dayEvents.length})`, 'all'));
        const pecCounts = new Map();
        dayEvents.forEach(evt => {
            const rawName = (evt.pec_name || 'PEC').trim();
            const upper = rawName.toUpperCase();
            pecCounts.set(upper, (pecCounts.get(upper) || 0) + 1);
        });
        Array.from(pecCounts.keys()).sort().forEach(name => {
            pecSelect.add(new Option(`${name} (${pecCounts.get(name)})`, name.toLowerCase()));
        });
        pecSelect.value = 'all';
    }

    // Formata a data de exibição
    const [year, month, day] = dateStr.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    const monthNames = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    const dayNames   = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];

    document.getElementById('modal-day-title').textContent =
        `${dayNames[dateObj.getDay()]}, ${day} de ${monthNames[month - 1]} de ${year}`;
    document.getElementById('modal-day-count').textContent =
        `${dayEvents.length} agendamento${dayEvents.length !== 1 ? 's' : ''}`;

    // Reset filtro de turno
    setModalShiftButton('all');
    renderModalEvents();

    // Fechar ao clicar no backdrop
    const modal = document.getElementById('day-events-modal');
    modal.classList.add('open');
    document.getElementById('modal-day-close').focus();
    document.getElementById('modal-events-list').scrollTop = 0;
    modal.onclick = (e) => { if (e.target === modal) closeDayEventsModal(); };

    // Fechar com ESC
    document.addEventListener('keydown', onModalKeyDown);
}

function closeDayEventsModal() {
    document.getElementById('day-events-modal').classList.remove('open');
    document.removeEventListener('keydown', onModalKeyDown);
    modalReturnFocus?.focus();
}

function onModalKeyDown(e) {
    if (e.key === 'Escape') closeDayEventsModal();
    if (e.key === 'Tab') {
        const buttons = Array.from(document.getElementById('day-events-modal').querySelectorAll('button:not(:disabled), select:not(:disabled)'));
        const first = buttons[0], last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
}

function filterModalShift(shift) {
    modalCurrentShiftFilter = shift;
    setModalShiftButton(shift);
    renderModalEvents();
}

function filterModalPec(pec) {
    modalCurrentPecFilter = pec;
    const pecSelect = document.getElementById('modal-pec-filter');
    if (pecSelect && pecSelect.value !== pec) {
        pecSelect.value = pec;
    }
    renderModalEvents();
}

function setModalShiftButton(activeShift) {
    const map = { 'all': 'modal-filter-all', 'Manhã': 'modal-filter-manha', 'Tarde': 'modal-filter-tarde', 'Noite': 'modal-filter-noite' };
    Object.entries(map).forEach(([key, id]) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        if (key === activeShift) {
            btn.className = 'modal-shift-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm transition';
        } else {
            btn.className = 'modal-shift-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-gray-200 text-gray-700 hover:bg-gray-300 transition';
        }
    });
}

function renderModalEvents() {
    const container = document.getElementById('modal-events-list');
    container.replaceChildren();
    
    const filtered = modalDayEvents.filter(evt => {
        const matchShift = (modalCurrentShiftFilter === 'all') || ((evt.shift || 'Manhã') === modalCurrentShiftFilter);
        const evtPec = (evt.pec_name || 'PEC').toLowerCase().trim();
        const matchPec = (modalCurrentPecFilter === 'all') || (evtPec === modalCurrentPecFilter.toLowerCase().trim());
        return matchShift && matchPec;
    });

    document.getElementById('modal-day-count').textContent = `${filtered.length} de ${modalDayEvents.length} atividade(s)`;

    if (!filtered.length) {
        const emptyNotice = document.createElement('div');
        emptyNotice.className = 'col-span-full py-16 text-center text-slate-400 font-medium flex flex-col items-center justify-center gap-2';
        emptyNotice.innerHTML = `
            <i class="fa-regular fa-calendar-xmark text-4xl text-slate-300 mb-1"></i>
            <span class="text-sm font-semibold text-slate-600">Nenhuma atividade encontrada com os filtros selecionados.</span>
            <span class="text-xs text-slate-400">Tente alternar o turno ou selecionar outro PEC acima.</span>
        `;
        container.appendChild(emptyNotice);
        return;
    }

    filtered.forEach(evt => container.appendChild(createGestorEventCard(evt)));
}

// Editor contextual: alterações em rascunho, confirmação única e cancelamento seguro.
let flagEditor = null;
const normalizeFlagSearch = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function openFlagEditor(id) {
    const evt = scheduledEvents.find(item => item.id === id);
    if (!isPrimaryEvent(evt) || evt.user_id !== currentUser?.id || String(id).startsWith('temp_')) {
        showLockToast(); return;
    }
    flagEditor = { id, draft: (evt.flags || []).map(flag => ({...flag})), category: 'all', saving: false };
    document.getElementById('flag-context').textContent = evt.text_content;
    document.getElementById('flag-meta').textContent = `${evt.event_date.split('-').reverse().join('/')} · ${evt.shift || 'Manhã'} · ${evt.pec_name || 'PEC'}`;
    document.getElementById('flag-search').value = '';
    document.getElementById('flag-error').textContent = '';
    renderFlagEditor();
    document.getElementById('flag-dialog').showModal();
    document.getElementById('flag-search').focus();
}
function closeFlagEditor() {
    if (flagEditor?.saving) return;
    const id = flagEditor?.id;
    document.getElementById('flag-dialog').close();
    flagEditor = null;
    Array.from(document.querySelectorAll('[data-flag-event]')).find(button => button.dataset.flagEvent === String(id))?.focus();
}
function renderFlagEditor() {
    if (!flagEditor) return;
    const state = flagEditor;
    const categories = groups.filter(group => ['outros', 'acompanhamentos'].includes(group.id));
    const tabs = document.getElementById('flag-categories');
    tabs.replaceChildren();
    [{id: 'all', name: 'Todas'}, ...categories].forEach(group => {
        const button = document.createElement('button');
        button.textContent = group.name === 'Todas' ? 'Todas' : group.name.charAt(0) + group.name.slice(1).toLowerCase();
        button.setAttribute('aria-pressed', String(state.category === group.id));
        button.disabled = state.saving;
        button.onclick = () => { state.category = group.id; renderFlagEditor(); };
        tabs.appendChild(button);
    });
    const chosen = document.getElementById('flag-chosen');
    chosen.replaceChildren();
    state.draft.forEach(flag => {
        const chip = document.createElement('button');
        chip.className = 'pec-flag ' + (groups.find(group => group.id === flag.groupId)?.colorClass || '');
        chip.textContent = flag.label + ' ×';
        chip.setAttribute('aria-label', 'Remover ' + flag.label);
        chip.disabled = state.saving;
        chip.onclick = () => { state.draft = state.draft.filter(item => item !== flag); renderFlagEditor(); };
        chosen.appendChild(chip);
    });
    if (!state.draft.length) chosen.textContent = 'Nenhuma flag selecionada. As flags são opcionais.';
    const list = document.getElementById('flag-options');
    list.replaceChildren();
    const term = normalizeFlagSearch(document.getElementById('flag-search').value.trim());
    let count = 0;
    categories.filter(group => state.category === 'all' || state.category === group.id).forEach(group => {
        const items = group.items.filter(label => normalizeFlagSearch(label).includes(term));
        if (!items.length) return;
        const heading = document.createElement('h3');
        heading.textContent = group.name;
        list.appendChild(heading);
        items.forEach(label => {
            count++;
            const row = document.createElement('label');
            row.className = 'flag-option';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = state.draft.some(flag => flag.groupId === group.id && flag.label === label);
            input.disabled = state.saving;
            input.onchange = () => {
                if (input.checked) state.draft.push({groupId: group.id, label});
                else state.draft = state.draft.filter(flag => flag.groupId !== group.id || flag.label !== label);
                const index = Array.from(list.querySelectorAll('input')).indexOf(input);
                renderFlagEditor();
                document.getElementById('flag-options').querySelectorAll('input')[index]?.focus();
            };
            const text = document.createElement('span');
            text.textContent = label;
            row.append(input, text);
            list.appendChild(row);
        });
    });
    if (!count) list.textContent = 'Nenhuma flag encontrada. Tente outro termo ou categoria.';
    document.getElementById('flag-count').textContent = `${state.draft.length} selecionada(s)`;
    document.getElementById('flag-save').textContent = state.saving ? 'Salvando…' : 'Salvar flags';
    document.getElementById('flag-save').disabled = state.saving;
    document.getElementById('flag-search').disabled = state.saving;
    document.querySelectorAll('[data-flag-close]').forEach(button => button.disabled = state.saving);
}
async function saveFlagEditor() {
    if (!flagEditor || flagEditor.saving) return;
    const state = flagEditor;
    const evt = scheduledEvents.find(item => item.id === state.id);
    if (!isPrimaryEvent(evt) || evt.user_id !== currentUser?.id) { closeFlagEditor(); return; }
    state.saving = true;
    document.getElementById('flag-error').textContent = '';
    renderFlagEditor();
    try {
        const {data, error} = await supabaseClient.from('pec_events').update({flags: state.draft})
            .eq('id', evt.id).eq('user_id', currentUser.id).select('id');
        if (error || !data?.length) throw error || new Error('Registro não atualizado');
        evt.flags = state.draft.map(flag => ({...flag}));
        state.saving = false;
        renderCalendar();
        closeFlagEditor();
    } catch (error) {
        console.error(error);
        state.saving = false;
        renderFlagEditor();
        document.getElementById('flag-error').textContent = 'Não foi possível salvar. Suas escolhas foram mantidas; tente novamente.';
    }
}

let schoolActiveIndex = -1;
function filterGestorSchoolOptions() {
    const select = document.getElementById('gestor-school-filter');
    const search = document.getElementById('gestor-school-search');
    const term = normalizeFlagSearch(search.value.trim());
    const list = document.getElementById('school-dropdown-options');
    document.getElementById('school-dropdown-value').textContent = select.selectedOptions[0]?.textContent || 'Todas as escolas';
    list.replaceChildren();
    schoolActiveIndex = -1;
    search.removeAttribute('aria-activedescendant');
    const matches = Array.from(select.options).filter(option => option.value === 'all' || normalizeFlagSearch(option.textContent).includes(term));
    matches.forEach((option, index) => {
        const row = document.createElement('button');
        row.type = 'button'; row.className = 'school-dropdown-option'; row.id = 'school-option-'+index;
        row.setAttribute('role', 'option'); row.setAttribute('aria-selected', String(option.value === select.value));
        row.tabIndex = -1;
        row.textContent = option.textContent;
        row.onclick = () => {
            select.value = option.value;
            document.getElementById('school-dropdown-value').textContent = option.textContent;
            document.getElementById('school-dropdown').hidePopover();
            renderGestorCalendar();
            document.getElementById('school-dropdown-trigger').focus();
        };
        list.appendChild(row);
    });
    const count = matches.filter(option => option.value !== 'all').length;
    document.getElementById('gestor-school-results').textContent = count ? `${count} escola(s) encontrada(s)` : 'Nenhuma escola encontrada. Tente outro nome.';
}
function handleSchoolSearchKey(event) {
    const rows = Array.from(document.getElementById('school-dropdown-options').children);
    if (event.key === 'Enter') { event.preventDefault(); if (schoolActiveIndex >= 0) rows[schoolActiveIndex]?.click(); return; }
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    schoolActiveIndex = event.key === 'ArrowDown' ? Math.min(rows.length-1, schoolActiveIndex+1) : Math.max(0, schoolActiveIndex-1);
    rows.forEach((row,index) => row.classList.toggle('is-active', index === schoolActiveIndex));
    const active = rows[schoolActiveIndex];
    if (active) { event.target.setAttribute('aria-activedescendant', active.id); active.scrollIntoView({block:'nearest'}); }
}
function positionSchoolDropdown() {
    const popup = document.getElementById('school-dropdown');
    const rect = document.getElementById('school-dropdown-trigger').getBoundingClientRect();
    const width = Math.min(Math.max(rect.width, 310), window.innerWidth-16);
    popup.style.width = width+'px';
    popup.style.left = Math.max(8, Math.min(rect.left, window.innerWidth-width-8))+'px';
    const below = window.innerHeight-rect.bottom-12;
    const above = rect.top-12;
    const down = below >= 220 || below >= above;
    const height = Math.max(100, Math.min(330, down ? below : above));
    document.getElementById('school-dropdown-options').style.maxHeight = Math.max(40,height-95)+'px';
    popup.style.top = (down ? rect.bottom+5 : Math.max(8,rect.top-height-5))+'px';
}
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('school-dropdown');
    popup.addEventListener('toggle', event => {
        const open = event.newState === 'open';
        document.getElementById('school-dropdown-trigger').setAttribute('aria-expanded', String(open));
        if (open) {
            document.getElementById('gestor-school-search').value = '';
            filterGestorSchoolOptions(); positionSchoolDropdown();
            document.getElementById('gestor-school-search').focus();
        }
    });
    window.addEventListener('resize', () => { if (popup.matches(':popover-open')) positionSchoolDropdown(); });
    document.addEventListener('scroll', event => {
        if (popup.matches(':popover-open') && !popup.contains(event.target)) popup.hidePopover();
    }, true);
});
