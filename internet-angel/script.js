(function () {
  var screens = Array.prototype.slice.call(document.querySelectorAll(".screen"));
  var startButton = document.querySelector('[data-action="start"]');
  var form = document.getElementById("diagnostic-form");
  var zodiacSelect = document.getElementById("zodiac-sign");
  var video = document.getElementById("camera-feed");
  var fallback = document.getElementById("camera-fallback");
  var resultScreen = document.querySelector('[data-screen="result"]');
  var stream = null;
  var scanTimer = null;
  var activeInputs = {
    screenName: "",
    zodiac: "",
    spotify: ""
  };

  var prophecySessionKey = "internetAngelUsedProphecies";

  var zodiacMap = {
    aries: "signal",
    leo: "signal",
    sagittarius: "signal",
    taurus: "archive",
    virgo: "archive",
    capricorn: "archive",
    gemini: "glitch",
    libra: "glitch",
    aquarius: "glitch",
    cancer: "threshold",
    scorpio: "threshold",
    pisces: "threshold"
  };

  var prophecies = [
    "Something you deleted will matter more than something you kept.",
    "The person you were at fourteen is trying to tell you something. You already know what it is.",
    "You are not behind. You are on a different schedule than the one you were given.",
    "The thing you keep almost saying is the most important thing about you.",
    "Someone is thinking about a conversation you had and have completely forgotten.",
    "You will find it. You don't know what it is yet. You will find it.",
    "The version of you that exists in other people's memories is kinder than you think.",
    "You have already survived the thing you are most afraid of. Not this version \u2014 but you have done it.",
    "A door you closed is going to open from the other side.",
    "The thing you do when nobody is watching is your real talent.",
    "You are someone's proof that things can be different.",
    "There is a version of your life where you made the other choice. They are thinking about you too.",
    "Something is about to make sense.",
    "You have been carrying something that was never yours to carry. You are allowed to put it down.",
    "The strangest thing about you is the most necessary thing about you.",
    "You will return to a place and it will feel completely different. You will be the thing that changed.",
    "Someone found exactly what they needed in something you made and never told you.",
    "The pattern you keep repeating is almost finished repeating.",
    "You are further along than your anxiety is willing to admit.",
    "The signal you've been sending has been received. A response is coming."
  ];

  var angelOrder = [
    "threshold",
    "archive",
    "signal",
    "glitch",
    "witness",
    "echo",
    "vessel",
    "static"
  ];

  var angelData = {
    threshold: {
      name: "The Threshold Angel",
      bg: "#9B72F2",
      text: "#E1F572",
      reading: "You exist at the edge of things. You are the 3am thought, the unsent message, the tab left open for six months. You feel like you are always arriving, but never quite landing. People feel changed after talking to you but can't explain why.",
      frequency: "Liminal Frequency",
      hz: "396 hz",
      sigil: [
        "   /\\",
        "--<  >--",
        "   \\/",
        "   ||",
        "  /__\\"
      ].join("\n"),
      wing: [
        "        . . . . . . . . . . . . .",
        "      . . . . . . . . . . . . .",
        "    . . . . . . . . . . . . .",
        "  . . . . . . . . . . . .",
        ". . . . . . . . . . .",
        "  . . . . . . . . .",
        "    . . . . . .",
        "       . . ."
      ].join("\n")
    },
    archive: {
      name: "The Archive Angel",
      bg: "#E4E4E4",
      text: "#FF1414",
      reading: "You remember everything. You are the keeper of screenshots, the one who finds the article from 2011, the one who never forgets what someone said. Your aura carries the weight of accumulated knowledge. This is a gift. (It is also exhausting).",
      frequency: "Memory Frequency",
      hz: "741 hz",
      sigil: [
        "[====]",
        "| /\\ |",
        "| \\/ |",
        "[====]",
        "  ||"
      ].join("\n"),
      wing: [
        "||||||||||||||||",
        " |||||||||||||",
        "  ||||||||||",
        "   |||||||",
        "    ||||",
        "   |||||||",
        "  ||||||||||"
      ].join("\n")
    },
    signal: {
      name: "The Signal Angel",
      bg: "#EEFBA5",
      text: "#9B72F2",
      reading: "You are always transmitting. Something about you reaches people before you do \u2014 your reputation, your energy, your taste \u2014 you don't need to try to be perceived. The frequency you operate on is simply louder than most.",
      frequency: "Transmission Frequency",
      hz: "528 hz",
      sigil: [
        "  /\\",
        " /--\\",
        "<---->",
        " \\--/",
        "  \\/"
      ].join("\n"),
      wing: [
        "        .-.-.-.-.-.-.",
        "      .-.-.-.-.-.",
        "    .-.-.-.-.",
        "  .-.-.-.",
        ".-.-.",
        "  .-.-.-.",
        "    .-.-.-.-."
      ].join("\n")
    },
    glitch: {
      name: "The Glitch Angel",
      bg: "#F092C3",
      text: "#ECFFED",
      reading: "You don't quite fit the pattern. Systems malfunction around you. Plans change. Things that should work don't, and things that shouldn't do. You are not broken, you are running on a different version of reality than everyone else.",
      frequency: "Interference Frequency",
      hz: "417 hz",
      sigil: [
        "|\\/|",
        "|/\\|__",
        "  __/\\|",
        "|/  \\|",
        "--  --"
      ].join("\n"),
      wing: [
        "   .. .. .. .. ..",
        " .. .. ..   .. .. ..",
        ".. ..   .. ..",
        "  .. .. .. .. .. ..",
        "     .. ..   ..",
        " .. .. .. ..",
        "   .. .."
      ].join("\n")
    },
    witness: {
      name: "The Witness Angel",
      bg: "#8BE58E",
      text: "#5A1CDA",
      reading: "You see everything. You are the observer, the one in the corner who notices, the one who remembers the details nobody else caught. You carry other people's stories inside you like a library. You are more powerful than you look.",
      frequency: "Clarity Frequency",
      hz: "852 hz",
      sigil: [
        " .---.",
        "/  o  \\",
        "< --- >",
        "\\  o  /",
        " '---'"
      ].join("\n"),
      wing: [
        "      o o o o o o o",
        "    o o o o o o",
        "  o o o o o",
        "o o o o",
        "  o o o o o",
        "    o o o o o o",
        "      o o o o o o o"
      ].join("\n")
    },
    echo: {
      name: "The Echo Angel",
      bg: "#3D0300",
      text: "#FFCFCF",
      reading: "You leave traces everywhere. Long after you've left a room, a conversation, a relationship, something of you remains. You shape the people who encounter you in ways that take years to fully understand. Your influence is quiet and permanent.",
      frequency: "Resonance Frequency",
      hz: "639 hz",
      sigil: [
        "((  ))",
        " (())",
        "  ||",
        " (())",
        "((  ))"
      ].join("\n"),
      wing: [
        "        ((((((((",
        "      (((((((",
        "    ((((((",
        "  ((((",
        "(((",
        "  ((((",
        "    (((((("
      ].join("\n")
    },
    vessel: {
      name: "The Vessel Angel",
      bg: "#F96D6D",
      text: "#360300",
      reading: "You hold things for other people. Emotions, secrets, energy \u2014 people hand it to you without asking and you carry it without complaint. You are a container. Learning what to put down is your life's work.",
      frequency: "Holding Frequency",
      hz: "174 hz",
      sigil: [
        "\\    /",
        " \\  /",
        " |  |",
        " |__|",
        " \\__/"
      ].join("\n"),
      wing: [
        "      [........]",
        "    [........]",
        "  [......]",
        "[....]",
        "  [......]",
        "    [........]",
        "      [........]"
      ].join("\n")
    },
    static: {
      name: "The Static Angel",
      bg: "#C6F2FF",
      text: "#FF1ECB",
      reading: "You are between frequencies. Not lost, searching. Your aura is the hum of something that hasn't quite resolved yet. You are in the middle of becoming something and the signal is not yet clear. This is not a bad thing.",
      frequency: "Becoming Frequency",
      hz: "963 hz",
      sigil: [
        "/\\/\\//",
        "\\//\\/",
        "--++--",
        "/\\/\\//",
        "\\//\\/"
      ].join("\n"),
      wing: [
        ". . . . . . . .",
        " . x . . x . . .",
        ". . . x . . x .",
        "  x . . . . .",
        ". . x . . x . .",
        " . . . x . .",
        "   . . ."
      ].join("\n")
    }
  };

  function showScreen(name) {
    screens.forEach(function (screen) {
      screen.classList.toggle("is-active", screen.getAttribute("data-screen") === name);
    });
  }

  function mirrorWing(wing) {
    return wing
      .split("\n")
      .map(function (line) {
        return line
          .split("")
          .reverse()
          .map(function (character) {
            var swap = {
              "/": "\\",
              "\\": "/",
              "(": ")",
              ")": "(",
              "[": "]",
              "]": "[",
              "<": ">",
              ">": "<"
            };
            return swap[character] || character;
          })
          .join("");
      })
      .join("\n");
  }

  function setLandingWings() {
    var landingWing = [
      "        . . . . . . . . . . . . . . . .",
      "      . . . . . . . . . . . . . . .",
      "    . . . . . . . . . . . . . .",
      "  . . . . . . . . . . . .",
      ". . . . . . . . . .",
      "  . . . . . . . .",
      "    . . . . .",
      "      . . ."
    ].join("\n");

    document.querySelector(".landing-wing-left").textContent = landingWing;
    document.querySelector(".landing-wing-right").textContent = mirrorWing(landingWing);
  }

  function readUsedProphecies() {
    try {
      return JSON.parse(sessionStorage.getItem(prophecySessionKey) || "[]");
    } catch (error) {
      return [];
    }
  }

  function writeUsedProphecies(used) {
    try {
      sessionStorage.setItem(prophecySessionKey, JSON.stringify(used));
    } catch (error) {
      return;
    }
  }

  function nextProphecy() {
    var used = readUsedProphecies().filter(function (index) {
      return index >= 0 && index < prophecies.length;
    });

    if (used.length >= prophecies.length) {
      used = [];
    }

    var available = prophecies
      .map(function (_prophecy, index) {
        return index;
      })
      .filter(function (index) {
        return used.indexOf(index) === -1;
      });
    var choice = available[Math.floor(Math.random() * available.length)];

    used.push(choice);
    writeUsedProphecies(used);

    return prophecies[choice];
  }

  function screenNameHasNumbersOrSymbols(screenName) {
    return /[0-9]|[^a-zA-Z\s]/.test(screenName);
  }

  function assignAngel(inputs) {
    var screenName = inputs.screenName.trim();
    var zodiac = inputs.zodiac;

    if (!inputs.spotify.trim()) {
      return "vessel";
    }

    if (screenNameHasNumbersOrSymbols(screenName)) {
      return "static";
    }

    if (zodiacMap[zodiac]) {
      return zodiacMap[zodiac];
    }

    return screenName.length % 2 === 0 ? "echo" : "witness";
  }

  function renderResult() {
    var angelKey = assignAngel(activeInputs);
    var angel = angelData[angelKey];
    var index = angelOrder.indexOf(angelKey) + 1;

    resultScreen.style.setProperty("--angel-bg", angel.bg);
    resultScreen.style.setProperty("--angel-text", angel.text);

    document.getElementById("angel-name").textContent = angel.name;
    document.getElementById("angel-index").textContent = "aura type " + String(index).padStart(2, "0") + " of 08";
    document.getElementById("aura-reading").textContent = angel.reading;
    document.getElementById("angel-sigil").textContent = angel.sigil;
    document.getElementById("prophecy").textContent = nextProphecy();
    document.getElementById("frequency-hz").textContent = angel.hz;
    document.getElementById("frequency-name").textContent = angel.frequency;
    document.getElementById("result-wing-left").textContent = angel.wing;
    document.getElementById("result-wing-right").textContent = mirrorWing(angel.wing);
  }

  function stopCamera() {
    if (!stream) {
      return;
    }

    stream.getTracks().forEach(function (track) {
      track.stop();
    });
    stream = null;
    video.srcObject = null;
  }

  function finishScan() {
    stopCamera();
    renderResult();
    showScreen("result");
  }

  function startScan() {
    clearTimeout(scanTimer);
    fallback.hidden = true;
    showScreen("scan");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "user" }, audio: false })
        .then(function (cameraStream) {
          stream = cameraStream;
          video.srcObject = cameraStream;
        })
        .catch(function () {
          fallback.hidden = false;
        });
    } else {
      fallback.hidden = false;
    }

    scanTimer = window.setTimeout(finishScan, 4300);
  }

  startButton.addEventListener("click", function () {
    showScreen("form");
  });

  zodiacSelect.addEventListener("change", function () {
    zodiacSelect.classList.toggle("has-value", Boolean(zodiacSelect.value));
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    activeInputs = {
      screenName: form.elements.screenName.value,
      zodiac: form.elements.zodiac.value,
      spotify: form.elements.spotify.value
    };
    startScan();
  });

  setLandingWings();
})();
