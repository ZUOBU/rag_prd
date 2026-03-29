/* app.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Text Selection Menu
    const chatBody = document.getElementById('chat-body');
    const ctxMenu = document.getElementById('context-menu');
    let selectedText = '';

    document.addEventListener('selectionchange', () => {
        const selection = window.getSelection();
        if (selection.toString().trim() !== '') {
            selectedText = selection.toString().trim();
        }
    });

    chatBody.addEventListener('mouseup', (e) => {
        const selection = window.getSelection();
        if (selection.toString().trim().length > 0) {
            setTimeout(() => {
                ctxMenu.style.left = e.pageX + 10 + 'px';
                ctxMenu.style.top = e.pageY + 10 + 'px';
                ctxMenu.classList.add('show');
            }, 50);
        } else {
            ctxMenu.classList.remove('show');
        }
    });

    document.addEventListener('mousedown', (e) => {
        if (!ctxMenu.contains(e.target)) {
            ctxMenu.classList.remove('show');
        }
    });

    window.handleMenuClick = (action) => {
        ctxMenu.classList.remove('show');
        if (action === 'explain') {
            window.switchTab('explain');
            document.getElementById('explain-panel').innerHTML =
                '<div class="panel-section">' +
                '  <div class="explain-step">' +
                '    <div class="explain-step-title">1. 上下文识别</div>' +
                '    <div class="explain-step-desc">提取词汇: <b>' + selectedText + '</b><br>在历史进线记录(客户名: 王女士)中, 属于近期关注的结构性理财相关术语。</div>' +
                '  </div>' +
                '  <div class="explain-step">' +
                '    <div class="explain-step-title">2. AI 溯源解释</div>' +
                '    <div class="explain-step-desc">该词汇指代我行在售的低风险、结合期权的定期产品，具有保本属性...' +
                '  </div>' +
                '</div>';
        } else if (action === 'search') {
            window.switchTab('kb');
            document.querySelector('.kb-search input').value = selectedText;
        }
    };

    // 2. Tab Switching
    window.switchTab = (tabId) => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
        document.querySelector('[onclick="switchTab(\'' + tabId + '\')"]').classList.add('active');
        document.getElementById(tabId + '-panel').style.display = 'block';
    };

    // 3. Sensitive Word Detection
    const textarea = document.getElementById('chat-input');
    const warning = document.getElementById('input-warning');
    textarea.addEventListener('input', (e) => {
        const val = e.target.value;
        const sensitiveWords = ['保本保息', '绝对收益', '内幕', '承诺收益'];
        let flag = false;
        sensitiveWords.forEach(w => {
            if (val.includes(w)) {
                flag = true;
            }
        });

        if (flag) {
            warning.style.display = 'flex';
            textarea.style.color = 'var(--danger)';
            textarea.style.textDecoration = 'underline wavy var(--danger)';
        } else {
            warning.style.display = 'none';
            textarea.style.color = 'var(--text-main)';
            textarea.style.textDecoration = 'none';
        }
    });

    // 4. Fill AI Suggestion
    window.applySuggestion = () => {
        const sug = document.getElementById('ai-suggest-text').innerText;
        textarea.value = sug;
        document.getElementById('ai-suggest-bar').style.display = 'none';
    };

    window.sendSuggestion = () => {
        const sug = document.getElementById('ai-suggest-text').innerText;
        window.appendAgentMsg(sug);
        document.getElementById('ai-suggest-bar').style.display = 'none';
    };

    window.applyAutoSummaryReply = () => {
        const text = '请稍等，我正在了解您刚才提出的问题...';
        window.appendAgentMsg(text);
        document.querySelector('.auto-summary').style.display = 'none';
    };

    window.appendAgentMsg = (text) => {
        const now = new Date();
        const timeStr = [now.getHours(), now.getMinutes(), now.getSeconds()]
            .map(n => n.toString().padStart(2, '0')).join(':');
        const html =
            '<div class="msg-row agent">' +
            '  <div>' +
            '    <div class="msg-bubble">' + text + '</div>' +
            '    <div class="msg-time">' + timeStr + '</div>' +
            '  </div>' +
            '</div>';
        chatBody.insertAdjacentHTML('beforeend', html);
        chatBody.scrollTop = chatBody.scrollHeight;
        textarea.value = '';
        warning.style.display = 'none';
    };

    window.sendMsg = () => {
        if (textarea.value.trim() !== '') {
            window.appendAgentMsg(textarea.value);
        }
    };

    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            window.sendMsg();
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const bar = document.getElementById('ai-suggest-bar');
            if (bar.style.display !== 'none') {
                window.applySuggestion();
            }
        }
    });

});
