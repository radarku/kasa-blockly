// server.js
const express = require('express');
const bodyParser = require('body-parser');
const TPLSmartDevice = require('tplink-lightbulb');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' }));

function getBulb(host) {
  // You can add caching here if you want
  return new TPLSmartDevice(host);
}

app.post('/api/kasa', async (req, res) => {
  const { host, action } = req.body;
  console.log('Received /api/kasa:', req.body);


  if (!host) {
    return res.status(400).json({ error: 'host is required' });
  }

  const bulb = getBulb(host);

  try {
    switch (action) {
      case 'init':
        await bulb.info();
        break;

      case 'power': {
        const { state } = req.body; // 'ON' | 'OFF' | 'TOGGLE'
        if (state === 'ON') {
          await bulb.power(true);
        } else if (state === 'OFF') {
          await bulb.power(false);
        } else if (state === 'TOGGLE') {
          const info = await bulb.info();
          const isOn = !!(info && info.light_state && info.light_state.on_off);
          await bulb.power(!isOn);
        }
        break;
      }

      case 'brightness': {
        const { value } = req.body; // 1–100
        await bulb.intensity(value);
        break;
      }

      case 'colorTemp': {
        const { value } = req.body; // Kelvin
        await bulb.temp(value);
        break;
      }

      case 'colorRGB': {
        const { r, g, b } = req.body;
        await bulb.color(r, g, b);
        break;
      }

      default:
        return res.status(400).json({ error: `Unknown action: ${action}` });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error('Kasa error', err);
    res.status(500).json({ error: err.message || String(err) });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Kasa control API listening on http://localhost:${PORT}`);
});
