/**
 * Nexura Autonomous Cloud Engine — Runtime Telemetry & Interactions
 * Visual World: RF Spectrum & Telecom Telemetry Analyzer
 * High-Precision Signal Simulation, Code Test Bench, Anycast Diagnostics
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initOscilloscope();
  initSevenSegmentTelemetry();
  initAnycastTopology();
  initSdkTestBench();
  initPricingToggle();
  initFaqAccordion();
  initInstallCommands();
});

/* --------------------------------------------------------------------------
   1. Navbar & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavbar() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-drawer a');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Calibrated RF Spectrum & Oscilloscope Waveform Engine
   -------------------------------------------------------------------------- */
function initOscilloscope() {
  const canvas = document.getElementById('oscilloscopeCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let activeChannel = 'ch1';
  let phase = 0;
  let cursorX = null;
  let cursorY = null;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    cursorX = e.clientX - rect.left;
    cursorY = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    cursorX = null;
    cursorY = null;
  });

  const channelBtns = document.querySelectorAll('.channel-btn');
  channelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      channelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeChannel = btn.getAttribute('data-channel');
      
      const hudCh = document.getElementById('hudActiveChannel');
      if (hudCh) {
        hudCh.textContent = `TRACE: ${btn.textContent.trim()}`;
      }
    });
  });

  function render() {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const midY = height / 2;

    // Clear background with persistence trail
    ctx.fillStyle = 'rgba(2, 4, 7, 0.32)';
    ctx.fillRect(0, 0, width, height);

    phase += 0.045;

    // Vector line rendering without diffuse blur
    ctx.lineWidth = 1.8;
    ctx.beginPath();

    if (activeChannel === 'ch1') {
      ctx.strokeStyle = '#00f0ff';

      for (let x = 0; x < width; x++) {
        const normX = x / width;
        const fundamental = Math.sin(normX * 14 + phase) * 34;
        const harmonic = Math.sin(normX * 42 - phase * 2) * 12;
        const packetSpike = Math.exp(-Math.pow(((normX * 10 + phase * 0.8) % 10) - 5, 2)) * 38;
        const noise = (Math.random() - 0.5) * 2;
        const y = midY + fundamental + harmonic + packetSpike + noise;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
    } else if (activeChannel === 'ch2') {
      ctx.strokeStyle = '#10b981';

      for (let x = 0; x < width; x++) {
        const normX = x / width;
        const rawSquare = Math.sign(Math.sin(normX * 18 + phase * 1.5));
        const y = midY + rawSquare * 44 + (Math.random() - 0.5) * 1.5;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
    } else if (activeChannel === 'ch3') {
      ctx.strokeStyle = '#f59e0b';

      for (let x = 0; x < width; x++) {
        const normX = x / width;
        const carrier = Math.sin(normX * 55 + phase * 3);
        const envelope = (Math.sin(normX * 8 + phase * 0.5) + 1.2) * 24;
        const y = midY + carrier * envelope;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
    }

    ctx.stroke();

    // Draw cursor measurement markers
    if (cursorX !== null && cursorY !== null) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      ctx.beginPath();
      ctx.moveTo(cursorX, 0);
      ctx.lineTo(cursorX, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, cursorY);
      ctx.lineTo(width, cursorY);
      ctx.stroke();

      ctx.setLineDash([]);

      const voltVal = ((midY - cursorY) / (height / 2) * 5).toFixed(2);
      const microSec = (cursorX / width * 100).toFixed(1);
      ctx.fillStyle = '#00f0ff';
      ctx.font = '11px "Share Tech Mono"';
      ctx.fillText(`${voltVal > 0 ? '+' : ''}${voltVal}V | ${microSec}µs`, cursorX + 8, cursorY - 8);
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   3. Seven-Segment Telemetry Jitter Simulation
   -------------------------------------------------------------------------- */
function initSevenSegmentTelemetry() {
  const throughputLive = document.getElementById('segThroughputLive');
  const latencyLive = document.getElementById('segLatencyLive');
  if (!throughputLive || !latencyLive) return;

  setInterval(() => {
    const baseThroughput = 48420;
    const jitter = Math.floor((Math.random() - 0.5) * 260);
    const valThroughput = (baseThroughput + jitter).toLocaleString('en-US');
    throughputLive.textContent = valThroughput;

    const latBase = 11.2;
    const latJitter = ((Math.random() - 0.5) * 0.4).toFixed(1);
    const valLatency = (parseFloat(latBase) + parseFloat(latJitter)).toFixed(1);
    latencyLive.textContent = `${valLatency}ms`;
  }, 1800);
}

/* --------------------------------------------------------------------------
   4. Interactive Anycast PoP Network Topology
   -------------------------------------------------------------------------- */
function initAnycastTopology() {
  const nodeCards = document.querySelectorAll('.node-card');
  const termLog = document.getElementById('anycastTerminalLog');
  const pingBtn = document.getElementById('btnTriggerPing');

  const popData = {
    tokyo: {
      pop: 'NEX-HND-01 (Tokyo)',
      ip: '198.51.100.44',
      rtt: '8.4ms',
      hops: ['10.240.0.1 (Ingress)', '172.16.88.12 (Anycast BGP)', '198.51.100.44 (V8 Worker)']
    },
    frankfurt: {
      pop: 'NEX-FRA-02 (Frankfurt)',
      ip: '198.51.100.18',
      rtt: '11.8ms',
      hops: ['10.240.0.1 (Ingress)', '172.16.42.5 (DE-CIX Transit)', '198.51.100.18 (V8 Worker)']
    },
    singapore: {
      pop: 'NEX-SIN-01 (Singapore)',
      ip: '198.51.100.91',
      rtt: '9.2ms',
      hops: ['10.240.0.1 (Ingress)', '172.16.12.9 (SGIX Anycast)', '198.51.100.91 (V8 Worker)']
    },
    ashburn: {
      pop: 'NEX-IAD-03 (US-East)',
      ip: '198.51.100.7',
      rtt: '11.1ms',
      hops: ['10.240.0.1 (Ingress)', '172.16.99.3 (Equinix Core)', '198.51.100.7 (V8 Worker)']
    }
  };

  function runPingSimulation(cityKey) {
    const data = popData[cityKey] || popData.tokyo;
    if (!termLog) return;

    termLog.innerHTML = `
      <div style="color: var(--text-muted);">&gt; traceroute --anycast-probe ${data.ip}</div>
      <div style="color: var(--signal-cyan);">&gt; Establishing mTLS 1.3 handshake...</div>
      <div>1  ${data.hops[0]}  <span class="terminal-accent">0.32ms</span></div>
      <div>2  ${data.hops[1]}  <span class="terminal-accent">3.41ms</span></div>
      <div>3  ${data.hops[2]}  <span class="terminal-accent">${data.rtt}</span> [ZERO LOSS]</div>
      <div style="color: var(--signal-emerald); margin-top: 0.5rem;">✔ Anycast vector verified: ${data.pop} reachable in ${data.rtt}</div>
    `;
  }

  nodeCards.forEach(card => {
    card.addEventListener('click', () => {
      nodeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const city = card.getAttribute('data-city');
      runPingSimulation(city);
    });
  });

  if (pingBtn) {
    pingBtn.addEventListener('click', () => {
      const activeCard = document.querySelector('.node-card.active') || nodeCards[0];
      const city = activeCard ? activeCard.getAttribute('data-city') : 'tokyo';
      runPingSimulation(city);
    });
  }
}

/* --------------------------------------------------------------------------
   5. Multi-Language SDK Test Bench
   -------------------------------------------------------------------------- */
function initSdkTestBench() {
  const snippets = {
    typescript: `import { NexuraClient } from '@nexura/sdk';

// Initialize zero-cold-start edge stream
const nexura = new NexuraClient({
  cluster: 'edge-ap-southeast-1',
  telemetry: 'strict'
});

export default nexura.pipeline('stream_events', async (ctx) => {
  const payload = await ctx.event.json();
  
  // High-throughput vector indexing in V8 microVM
  const indexed = await ctx.vector.embed(payload.data);
  return ctx.respond({ ok: true, id: indexed.id });
});`,

    python: `from nexura import StreamEngine, Context

engine = StreamEngine(cluster="edge-ap-southeast-1", strict_isolation=True)

@engine.pipeline("stream_events")
async def handle_stream(ctx: Context):
    payload = await ctx.event.json()
    
    # Execute deterministic edge logic in <0.5ms snapshot
    indexed = await ctx.vector.embed(payload["data"])
    return {"ok": True, "pipeline_id": indexed.id, "latency_p99": "11.2ms"}`,

    go: `package main

import (
  "github.com/nexura-engine/sdk-go"
  "context"
)

func main() {
  client := nexura.NewClient(nexura.Config{
    Cluster: "edge-ap-southeast-1",
  })

  client.Handle("stream_events", func(ctx *nexura.Context) error {
    var payload DataPayload
    if err := ctx.BindJSON(&payload); err != nil {
      return err
    }
    return ctx.JSON(200, map[string]any{"ok": true, "status": "replicated"})
  })
}`,

    curl: `curl -X POST https://edge-ap-southeast-1.nexura.ai/v1/stream \\
  -H "Authorization: Bearer nx_live_9942aef91" \\
  -H "Content-Type: application/json" \\
  -d '{
    "stream_id": "pipe_ai_9942a",
    "event": "ingest_telemetry",
    "payload": { "sensor_id": "tokyo_core_01", "temp_c": 21.4 }
  }'`
  };

  const codeDisplay = document.getElementById('codeSnippetArea');
  const langBtns = document.querySelectorAll('.lang-tab-btn');
  const runBtn = document.getElementById('btnRunTestBench');
  const copyBtn = document.getElementById('btnCopySnippet');
  const responseJson = document.getElementById('responseJsonArea');
  const responseStatus = document.getElementById('responseStatusBadge');

  let currentLang = 'typescript';

  function updateCode(lang) {
    currentLang = lang;
    if (codeDisplay) {
      codeDisplay.textContent = snippets[lang];
    }
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.getAttribute('data-lang');
      updateCode(lang);
    });
  });

  updateCode('typescript');

  if (runBtn && responseJson) {
    runBtn.addEventListener('click', () => {
      runBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.3"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg> Executing...
      `;
      runBtn.style.opacity = '0.7';

      setTimeout(() => {
        runBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg> Run Request
        `;
        runBtn.style.opacity = '1';

        const reqId = 'req_' + Math.random().toString(36).substring(2, 10);
        const isoDate = new Date().toISOString();

        responseJson.textContent = JSON.stringify({
          status: 200,
          ok: true,
          cluster: 'edge-ap-southeast-1',
          trace_id: 'trc_' + Math.random().toString(36).substring(2, 11),
          runtime: {
            microvm_wake_ms: 0.41,
            network_rtt_ms: 10.8,
            memory_footprint_kb: 420,
            zero_cold_start: true
          },
          request_id: reqId,
          timestamp: isoDate
        }, null, 2);

        if (responseStatus) {
          responseStatus.innerHTML = `<span style="color: var(--signal-emerald);">✔ 200 OK (11.2ms)</span>`;
        }

        showToast('Request executed in 11.2ms across Anycast edge mesh.');
      }, 400);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeText = snippets[currentLang];
      navigator.clipboard.writeText(codeText).then(() => {
        showToast('SDK code snippet copied to clipboard.');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   6. Pricing Switcher (Monthly / Yearly)
   -------------------------------------------------------------------------- */
function initPricingToggle() {
  const switchChassis = document.getElementById('pricingToggleChassis');
  const labelMonthly = document.getElementById('labelMonthly');
  const labelYearly = document.getElementById('labelYearly');

  const prices = {
    starter: { monthly: 19, yearly: 15 },
    pro: { monthly: 49, yearly: 39 },
    enterprise: { monthly: 199, yearly: 159 }
  };

  let isYearly = false;

  function setPricing(yearly) {
    isYearly = yearly;
    if (switchChassis) {
      switchChassis.classList.toggle('yearly', isYearly);
      switchChassis.setAttribute('aria-checked', isYearly ? 'true' : 'false');
    }
    if (labelMonthly) labelMonthly.classList.toggle('active', !isYearly);
    if (labelYearly) labelYearly.classList.toggle('active', isYearly);

    ['starter', 'pro', 'enterprise'].forEach(tier => {
      const elem = document.getElementById(`priceVal-${tier}`);
      if (elem) {
        elem.textContent = isYearly ? prices[tier].yearly : prices[tier].monthly;
      }
    });
  }

  if (switchChassis) {
    switchChassis.addEventListener('click', () => setPricing(!isYearly));
  }
  if (labelMonthly) {
    labelMonthly.addEventListener('click', () => setPricing(false));
  }
  if (labelYearly) {
    labelYearly.addEventListener('click', () => setPricing(true));
  }
}

/* --------------------------------------------------------------------------
   7. Diagnostic FAQ Accordion (Pure Class Toggle, Handled by CSS Grid)
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const trigger = card.querySelector('.faq-trigger');

    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');

        faqCards.forEach(c => {
          c.classList.remove('open');
          const t = c.querySelector('.faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          card.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
}

/* --------------------------------------------------------------------------
   8. Install Command Copy & Global Toast Alert
   -------------------------------------------------------------------------- */
function initInstallCommands() {
  const copyCmdBtn = document.getElementById('btnCopyInstallCmd');
  const cmdText = document.getElementById('installCmdText');
  const trialForm = document.getElementById('trialActivationForm');

  if (copyCmdBtn && cmdText) {
    copyCmdBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(cmdText.textContent.trim()).then(() => {
        showToast('CLI installation command copied to clipboard.');
      });
    });
  }

  if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = trialForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(`Verification code sent to ${emailInput.value}. Cluster initializing.`);
        emailInput.value = '';
      }
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('telecomToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'telecomToast';
    toast.className = 'toast-box';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" color="#00f0ff">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
