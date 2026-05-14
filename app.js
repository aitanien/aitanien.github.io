const SIGNS = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
];

const ARCHETYPES = [
  {
    name: 'The Threshold Angel',
    shortName: 'Threshold',
    description:
      "You exist at the edge of things. You are the 3am thought, the unsent message, the tab left open for six months. You feel like you are always arriving, but never quite landing. People feel changed after talking to you but can't explain why.",
    sigil: String.raw`     /\     
  __/  \__
 /__ /\ __\
   /_\/_\   
  <  /\  >
   \/  \/
    |__|
    /__/`,
    wings: String.raw`  .\             /.
 .  \     |     /  .
<    \   _|_   /    >
  \   \ (   ) /   /
   \___\ \_/ /___/
        \ | /
         \|/`,
  },
  {
    name: 'The Archive Angel',
    shortName: 'Archive',
    description:
      'You remember everything. You are the keeper of screenshots, the one who finds the article from 2011, the one who never forgets what someone said. Your aura carries the weight of accumulated knowledge. This is a gift. (It is also exhausting).',
    sigil: String.raw`  .--------.
  |  /\  |
  | /__\ |
  | [][ ]|
  |  ||  |
 _|__||__|_
 \__====__/
    ||||`,
    wings: String.raw` .---.       .---.
/     \  ^  /     \
|  |   \( )/   |  |
\  |  __\_/__  |  /
 '-+-'  / \  '-+-'
       /___/`,
  },
  {
    name: 'The Signal Angel',
    shortName: 'Signal',
    description:
      "You are always transmitting. Something about you reaches people before you do - your reputation, your energy, your taste - you don't need to try to be perceived. The frequency you operate on is simply louder than most.",
    sigil: String.raw`     .|.
  .-'\|/'-.
 <--- O --->
  '-./|\.-'
     |||
   __|||__
  /___|___/`,
    wings: String.raw`  )))       (((
 ))  \  |  /  ((
)     \(O)/     (
 ))  __\_/__  ((
  )))  / \  (((
     /___/`,
  },
  {
    name: 'The Glitch Angel',
    shortName: 'Glitch',
    description:
      "You don't quite fit the pattern. Systems malfunction around you. Plans change. Things that should work don't, and things that shouldn't do. You are not broken, you are running on a different version of reality than everyone else.",
    sigil: String.raw`  <\  |  />
    \ | /
  -- [#] --
  _/ /|\ \_
 <__/ | \__>
    _/ \_
   /_/ \_/`,
    wings: String.raw` /\/\      /\/\
 |  \  []  /  |
  \  \_||_/  /
 /_\  [__]  /_\
    \/ || \/
       /|`,
  },
  {
    name: 'The Witness Angel',
    shortName: 'Witness',
    description:
      "You see everything. You are the observer, the one in the corner who notices, the one who remembers the details nobody else caught. You carry other people's stories inside you like a library. You are more powerful than you look.",
    sigil: String.raw`   .-------.
  /  .-.  \
 |  ( o )  |
  \  '-'  /
   '-----'
    / | \
   /__|__\
      V`,
    wings: String.raw`  \  \     /  /
   \  \___/  /
  <   ( o )   >
   /  /---\  \
  /__/     \__\
      \ /`,
  },
  {
    name: 'The Echo Angel',
    shortName: 'Echo',
    description:
      "You leave traces everywhere. Long after you've left a room, a conversation, a relationship, something of you remains. You shape the people who encounter you in ways that take years to fully understand. Your influence is quiet and permanent.",
    sigil: String.raw`   ((  *  ))
  ((  /|\  ))
 ((  /_|_\  ))
    /  |  \
   /___|___\
      / \
   __/   \__`,
    wings: String.raw` ((\       /))
  ((\  *  /))
    ((\|/))
     ( | )
    ((/|\))
  ((/  |  \))`,
  },
  {
    name: 'The Vessel Angel',
    shortName: 'Vessel',
    description:
      "You hold things for other people. Emotions, secrets, energy - people hand it to you without asking and you carry it without complaint. You are a container. Learning what to put down is your life's work.",
    sigil: String.raw`    _____
   / ___ \
  / / _ \ \
 | | (_) | |
  \ \___/ /
   \_____/
    \ | /
     \_/`,
    wings: String.raw`   __       __
  /  \     /  \
 / /\ \___/ /\ \
 \ \/ ( ) \/ /
  \___\_/___/
     / /`,
  },
  {
    name: 'The Static Angel',
    shortName: 'Static',
    description:
      'You are between frequencies. Not lost, searching. Your aura is the hum of something that has not quite resolved yet. You are in the middle of becoming something and the signal is not yet clear. This is not a bad thing.',
    sigil: String.raw`  ~-._ | _.-~
 --  \|/  --
 ~~~ (.) ~~~
 -- _/|\_ --
  _.- | -._
     / \
   _/___\_`,
    wings: String.raw` ~~~\       /~~~
 --  \  |  /  --
  ~~~ \(.)/ ~~~
 -- __\_/__ --
 ~~~  / \  ~~~
     /___/`,
  },
];

const PROPHECIES = [
  'Something you deleted will matter more than something you kept.',
  'The person you were at fourteen is trying to tell you something. You already know what it is.',
  'You are not behind. You are on a different schedule than the one you were given.',
  'The thing you keep almost saying is the most important thing about you.',
  'Someone is thinking about a conversation you had and have completely forgotten.',
  "You will find it. You don't know what it is yet. You will find it.",
  "The version of you that exists in other people's memories is kinder than you think.",
  'You have already survived the thing you are most afraid of. Not this version - but you have done it.',
  'A door you closed is going to open from the other side.',
  'The thing you do when nobody is watching is your real talent.',
  "You are someone's proof that things can be different.",
  'There is a version of your life where you made the other choice. They are thinking about you too.',
  'Something is about to make sense.',
  'You have been carrying something that was never yours to carry. You are allowed to put it down.',
  'The strangest thing about you is the most necessary thing about you.',
  'You will return to a place and it will feel completely different. You will be the thing that changed.',
  'Someone found exactly what they needed in something you made and never told you.',
  'The pattern you keep repeating is almost finished repeating.',
  'You are further along than your anxiety is willing to admit.',
  "The signal you've been sending has been received. A response is coming.",
];

const SPOTIFY_SCOPES = 'user-top-read';
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SESSION_KEYS = {
  result: 'internetAngelResult',
  usedProphecies: 'internetAngelUsedProphecies',
  spotifyToken: 'internetAngelSpotifyToken',
  spotifyVerifier: 'internetAngelSpotifyVerifier',
  spotifyState: 'internetAngelSpotifyState',
};

const routes = ['landing', 'result', 'receipt', 'types'];
let scanComplete = false;
let currentResult = null;
let spotifyInsightCache = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.addEventListener('DOMContentLoaded', () => {
  renderTypes();
  bindNavigation();
  bindScanner();
  bindSpotify();
  bindReceiptCopy();
  restoreResult();
  restoreSpotifyCallback();
  routeFromHash();
  initAuraTrail();
});

function bindNavigation() {
  $$('[data-route]').forEach((trigger) => {
    trigger.addEventListener('click', () => setRoute(trigger.dataset.route));
  });

  $('[data-focus-form]')?.addEventListener('click', () => {
    setRoute('landing');
    setTimeout(() => $('#screen-name')?.focus(), 120);
  });

  window.addEventListener('hashchange', routeFromHash);
}

function routeFromHash() {
  const route = window.location.hash.replace('#', '').replace('page-', '');
  if (routes.includes(route)) {
    setRoute(route, false);
    return;
  }

  const numericRoute = {
    '1': 'landing',
    '2': 'result',
    '3': 'receipt',
    '4': 'types',
  }[route];

  setRoute(numericRoute || 'landing', false);
}

function setRoute(route, updateHash = true) {
  if (!routes.includes(route)) return;

  $$('[data-page]').forEach((page) => {
    page.classList.toggle('is-active', page.dataset.page === route);
  });

  $$('.nav-link').forEach((link) => {
    link.classList.toggle('is-active', link.dataset.route === route);
  });

  if (updateHash) {
    const pageNumber = routes.indexOf(route) + 1;
    history.replaceState(null, '', `#page-${pageNumber}`);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bindScanner() {
  $('#scan-button')?.addEventListener('click', () => runFaceScan());

  $('#aura-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;
    if (!scanComplete) await runFaceScan();

    const submitButton = event.currentTarget.querySelector('[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Reading aura...';

    const formData = new FormData(event.currentTarget);
    const inputs = {
      screenName: formData.get('screenName').toString().trim(),
      sunSign: formData.get('sunSign').toString(),
      spotifyUsername: formData.get('spotifyUsername').toString().trim(),
    };

    try {
      const spotify = await getSpotifyInsight(inputs.spotifyUsername);
      const archetype = assignArchetype(inputs, spotify);
      const prophecy = nextProphecy(inputs, spotify);
      const receiptId = makeReceiptId(inputs, archetype, prophecy);

      currentResult = {
        inputs,
        spotify,
        archetypeIndex: ARCHETYPES.indexOf(archetype),
        prophecy,
        receiptId,
        createdAt: new Date().toISOString(),
      };

      sessionStorage.setItem(SESSION_KEYS.result, JSON.stringify(currentResult));
      renderResult(currentResult);
      setRoute('result');
    } catch (error) {
      $('#spotify-status').textContent = `The scanner glitched: ${error.message}`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Generate aura result';
    }
  });
}

function runFaceScan() {
  return new Promise((resolve) => {
    const scan = $('#face-scan');
    const label = $('#scan-label');
    const percent = $('#scan-percent');
    const progress = $('#scan-progress');
    const button = $('#scan-button');

    if (!scan || !label || !percent || !progress || !button) {
      scanComplete = true;
      resolve();
      return;
    }

    scanComplete = false;
    scan.classList.add('is-scanning');
    button.disabled = true;
    button.textContent = 'Scanning...';

    const messages = [
      'Locating browser aura',
      'Measuring peripheral glow',
      'Reading eye contact avoidance',
      'Checking cheekbone latency',
      'Resolving angel frequency',
    ];

    let value = 0;
    const timer = window.setInterval(() => {
      value = Math.min(100, value + 4 + Math.floor(Math.random() * 9));
      progress.style.width = `${value}%`;
      percent.textContent = `${String(value).padStart(2, '0')}%`;
      label.textContent = messages[Math.min(messages.length - 1, Math.floor(value / 22))];

      if (value >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => {
          scan.classList.remove('is-scanning');
          label.textContent = 'Facial scan complete';
          button.disabled = false;
          button.textContent = 'Re-scan face';
          scanComplete = true;
          resolve();
        }, 280);
      }
    }, 150);
  });
}

function bindSpotify() {
  $('#spotify-connect')?.addEventListener('click', connectSpotify);
  updateSpotifyStatus();
}

async function connectSpotify() {
  const clientId = getSpotifyClientId(true);
  if (!clientId) {
    $('#spotify-status').textContent = 'Spotify Client ID not set. Taste simulation remains active.';
    return;
  }

  const verifier = generateVerifier();
  const challenge = await sha256Base64Url(verifier);
  const state = cryptoRandomString(16);
  const redirectUri = getRedirectUri();

  localStorage.setItem(SESSION_KEYS.spotifyVerifier, verifier);
  localStorage.setItem(SESSION_KEYS.spotifyState, state);

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope: SPOTIFY_SCOPES,
    state,
    code_challenge_method: 'S256',
    code_challenge: challenge,
  });

  window.location.href = `${SPOTIFY_AUTH_URL}?${params.toString()}`;
}

async function restoreSpotifyCallback() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  const storedState = localStorage.getItem(SESSION_KEYS.spotifyState);
  const verifier = localStorage.getItem(SESSION_KEYS.spotifyVerifier);
  const clientId = getSpotifyClientId(false);

  if (!code) return;

  history.replaceState(null, '', `${window.location.pathname}${window.location.hash || ''}`);

  if (!clientId || !verifier || state !== storedState) {
    $('#spotify-status').textContent = 'Spotify callback could not be verified. Taste simulation remains active.';
    return;
  }

  try {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: getRedirectUri(),
      client_id: clientId,
      code_verifier: verifier,
    });

    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!response.ok) throw new Error('Spotify token exchange failed');

    const token = await response.json();
    const expiresAt = Date.now() + token.expires_in * 1000;
    localStorage.setItem(SESSION_KEYS.spotifyToken, JSON.stringify({ ...token, expiresAt }));
    localStorage.removeItem(SESSION_KEYS.spotifyVerifier);
    localStorage.removeItem(SESSION_KEYS.spotifyState);
    spotifyInsightCache = null;
    updateSpotifyStatus('Spotify connected. Top artists and tracks will be used for your result.');
  } catch (error) {
    $('#spotify-status').textContent = `${error.message}. Taste simulation remains active.`;
  }
}

function getSpotifyClientId(allowPrompt) {
  const configured = window.INTERNET_ANGEL_SPOTIFY_CLIENT_ID || localStorage.getItem('internetAngelSpotifyClientId') || '';
  if (configured || !allowPrompt) return configured;

  const entered = window.prompt('Paste your Spotify Client ID. The app uses Authorization Code with PKCE and never asks for a client secret.');
  if (entered) {
    localStorage.setItem('internetAngelSpotifyClientId', entered.trim());
    return entered.trim();
  }

  return '';
}

function getSpotifyToken() {
  try {
    const token = JSON.parse(localStorage.getItem(SESSION_KEYS.spotifyToken) || 'null');
    if (!token || !token.access_token || token.expiresAt <= Date.now() + 10000) return null;
    return token.access_token;
  } catch {
    return null;
  }
}

function updateSpotifyStatus(message) {
  const status = $('#spotify-status');
  if (!status) return;

  if (message) {
    status.textContent = message;
    return;
  }

  const token = getSpotifyToken();
  status.textContent = token
    ? 'Spotify connected. Top artists and tracks will be pulled from the authenticated account.'
    : 'Spotify credentials can be added later. Until then, taste is simulated from the username.';
}

async function getSpotifyInsight(username) {
  if (spotifyInsightCache) return spotifyInsightCache;

  const token = getSpotifyToken();
  if (!token) {
    spotifyInsightCache = makeSimulatedSpotifyInsight(username);
    return spotifyInsightCache;
  }

  try {
    const [artistsResponse, tracksResponse] = await Promise.all([
      fetch('https://api.spotify.com/v1/me/top/artists?limit=20&time_range=medium_term', {
        headers: { Authorization: `Bearer ${token}` },
      }),
      fetch('https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=medium_term', {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);

    if (!artistsResponse.ok || !tracksResponse.ok) throw new Error('Spotify top data unavailable');

    const artistsPayload = await artistsResponse.json();
    const tracksPayload = await tracksResponse.json();
    const artists = artistsPayload.items || [];
    const tracks = tracksPayload.items || [];
    const genres = artists.flatMap((artist) => artist.genres || []);
    const genreCounts = countValues(genres);
    const topGenres = Object.entries(genreCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([genre]) => genre);
    const avgPopularity = average(tracks.map((track) => track.popularity || 0));

    spotifyInsightCache = {
      source: 'spotify',
      username: username || 'authenticated listener',
      topGenres,
      artistCount: artists.length,
      trackCount: tracks.length,
      avgPopularity,
      artists: artists.slice(0, 5).map((artist) => artist.name),
      tracks: tracks.slice(0, 5).map((track) => track.name),
      pattern: topGenres.length ? topGenres.slice(0, 3).join(', ') : 'genre-light listening',
    };
  } catch {
    spotifyInsightCache = makeSimulatedSpotifyInsight(username);
    updateSpotifyStatus('Spotify could not be reached. Taste simulation is active for this scan.');
  }

  return spotifyInsightCache;
}

function makeSimulatedSpotifyInsight(username = '') {
  const seed = username || 'anonymous static';
  const hash = hashString(seed);
  const genrePool = [
    'ambient',
    'hyperpop',
    'indie sleaze',
    'shoegaze',
    'club',
    'bedroom pop',
    'experimental',
    'folk',
    'noise',
    'dream pop',
    'rap',
    'post-punk',
    'r&b',
    'classical',
    'electronic',
    'metal',
  ];
  const topGenres = [0, 1, 2].map((offset) => genrePool[(hash + offset * 5) % genrePool.length]);

  return {
    source: 'simulated',
    username: username || 'unclaimed account',
    topGenres,
    artistCount: 8 + (hash % 13),
    trackCount: 10 + (hash % 11),
    avgPopularity: 32 + (hash % 64),
    artists: [`${topGenres[0]} angel`, `${topGenres[1]} witness`, `${topGenres[2]} archive`],
    tracks: ['unread message', 'browser hymn', 'soft error'],
    pattern: topGenres.join(', '),
  };
}

function assignArchetype(inputs, spotify) {
  const signIndex = Math.max(0, SIGNS.indexOf(inputs.sunSign));
  const zodiacScore = [0, 6, 2, 4, 2, 1, 5, 3, 0, 1, 7, 6][signIndex] || 0;
  const genreScore = scoreGenres(spotify.topGenres);
  const nameScore = hashString(inputs.screenName) % ARCHETYPES.length;
  const densityScore = (spotify.artistCount + spotify.trackCount + Math.round(spotify.avgPopularity / 10)) % ARCHETYPES.length;
  const index = (zodiacScore + genreScore + nameScore + densityScore) % ARCHETYPES.length;
  return ARCHETYPES[index];
}

function scoreGenres(genres = []) {
  const joined = genres.join(' ').toLowerCase();
  if (/noise|glitch|experimental|hyperpop/.test(joined)) return 3;
  if (/ambient|electronic|techno|club|dance/.test(joined)) return 7;
  if (/pop|rap|hip hop|r&b/.test(joined)) return 2;
  if (/folk|singer|acoustic|dream/.test(joined)) return 5;
  if (/classical|jazz|library/.test(joined)) return 1;
  if (/metal|punk|rock|shoegaze/.test(joined)) return 0;
  return 6;
}

function nextProphecy(inputs, spotify) {
  const used = readUsedProphecies();
  const available = PROPHECIES.map((_, index) => index).filter((index) => !used.includes(index));
  const pool = available.length ? available : PROPHECIES.map((_, index) => index);
  const seed = hashString(`${inputs.screenName}|${inputs.sunSign}|${spotify.pattern}|${Date.now()}`);
  const prophecyIndex = pool[seed % pool.length];

  sessionStorage.setItem(SESSION_KEYS.usedProphecies, JSON.stringify([...used, prophecyIndex]));
  return PROPHECIES[prophecyIndex];
}

function readUsedProphecies() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEYS.usedProphecies) || '[]');
  } catch {
    return [];
  }
}

function renderResult(result) {
  const archetype = ARCHETYPES[result.archetypeIndex];
  $('#result-kicker').textContent = `${result.inputs.screenName} / ${result.inputs.sunSign} / ${result.spotify.source}`;
  $('#result-title').textContent = archetype.name;
  $('#result-description').textContent = archetype.description;
  $('#result-sigil').textContent = archetype.sigil;
  $('#ascii-wings').textContent = archetype.wings;
  $('#result-prophecy').textContent = result.prophecy;

  renderReceipt(result);
}

function renderReceipt(result) {
  const archetype = ARCHETYPES[result.archetypeIndex];
  const spotifyLine = `${result.spotify.pattern} (${result.spotify.source})`;
  const output = [
    '>> internet_angel.scan --receipt',
    '',
    `screen_name: ${result.inputs.screenName}`,
    `sun_sign: ${result.inputs.sunSign}`,
    `spotify_pattern: ${spotifyLine}`,
    `artist_count: ${result.spotify.artistCount}`,
    `track_count: ${result.spotify.trackCount}`,
    `angel_type: ${archetype.name}`,
    '',
    'sigil:',
    archetype.sigil,
    '',
    `prophecy: ${result.prophecy}`,
    '',
    'status: received',
  ].join('\n');

  $('#receipt-id').textContent = `#${result.receiptId}`;
  $('#receipt-name').textContent = result.inputs.screenName;
  $('#receipt-sign').textContent = result.inputs.sunSign;
  $('#receipt-spotify').textContent = spotifyLine;
  $('#receipt-type').textContent = archetype.name;
  $('#receipt-output').textContent = output;
}

function restoreResult() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(SESSION_KEYS.result) || 'null');
    if (!saved) return;
    currentResult = saved;
    renderResult(saved);
  } catch {
    sessionStorage.removeItem(SESSION_KEYS.result);
  }
}

function renderTypes() {
  const grid = $('#types-grid');
  if (!grid) return;

  grid.replaceChildren(
    ...ARCHETYPES.map((type, index) => {
      const card = document.createElement('article');
      card.className = 'type-card';

      const content = document.createElement('div');
      const meta = document.createElement('div');
      meta.className = 'type-number';
      meta.innerHTML = `<span>Type ${String(index + 1).padStart(2, '0')}</span><span>${type.shortName}</span>`;

      const title = document.createElement('h3');
      title.textContent = type.name;
      const description = document.createElement('p');
      description.textContent = type.description;
      content.append(meta, title, description);

      const sigil = document.createElement('pre');
      sigil.className = 'sigil';
      sigil.textContent = type.sigil;
      card.append(content, sigil);
      return card;
    })
  );
}

function bindReceiptCopy() {
  $('#copy-receipt')?.addEventListener('click', async () => {
    const output = $('#receipt-output')?.textContent || '';
    const button = $('#copy-receipt');
    if (!output.trim() || output.includes('Run the scanner')) return;

    try {
      await navigator.clipboard.writeText(output);
      button.textContent = 'Copied';
      window.setTimeout(() => (button.textContent = 'Copy receipt'), 1200);
    } catch {
      button.textContent = 'Copy failed';
      window.setTimeout(() => (button.textContent = 'Copy receipt'), 1200);
    }
  });
}

function initAuraTrail() {
  const images = Array.from({ length: 16 }, (_, index) => `./images/trail-${index + 1}.png`);
  let lastX = null;
  let lastY = null;
  let lastUsedIndex = -1;

  const nextImage = () => {
    let index;
    do {
      index = Math.floor(Math.random() * images.length);
    } while (index === lastUsedIndex);
    lastUsedIndex = index;
    return images[index];
  };

  const placeImage = (x, y) => {
    const img = document.createElement('img');
    img.src = nextImage();
    img.alt = '';
    img.className = 'trail-img';
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    document.body.appendChild(img);
    window.setTimeout(() => img.remove(), 1400);
  };

  document.addEventListener('mousemove', (event) => {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    if (lastX === null || Math.hypot(event.clientX - lastX, event.clientY - lastY) > 72) {
      lastX = event.clientX;
      lastY = event.clientY;
      placeImage(lastX, lastY);
    }
  });

  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    for (let index = 0; index < 6; index += 1) {
      window.setTimeout(() => {
        placeImage(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      }, index * 240);
    }
  }
}

function makeReceiptId(inputs, archetype, prophecy) {
  return String(hashString(`${inputs.screenName}${inputs.sunSign}${archetype.name}${prophecy}`)).slice(0, 6).padStart(6, '0');
}

function hashString(value) {
  return Array.from(value || '').reduce((hash, char) => {
    return (Math.imul(31, hash) + char.charCodeAt(0)) >>> 0;
  }, 2166136261);
}

function countValues(values) {
  return values.reduce((counts, value) => {
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((total, value) => total + value, 0) / values.length;
}

function getRedirectUri() {
  return `${window.location.origin}${window.location.pathname}`;
}

function generateVerifier() {
  return cryptoRandomString(64);
}

function cryptoRandomString(length) {
  const values = new Uint8Array(length);
  window.crypto.getRandomValues(values);
  return Array.from(values, (value) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'[value % 66]).join('');
}

async function sha256Base64Url(value) {
  const data = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
