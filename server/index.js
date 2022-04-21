import express from 'express';
import fs from 'fs';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '.././src/App';

const PORT = process.env.port || 3000;
const html = fs.readFileSync('dist/frontend/index.html').toString();
const parts = html.split('not rendered');
const app = express();

app.use('/frontend', express.static('dist/frontend'));
app.use((req, res) => {
  res.write(parts[0]);

  const reactMarkup = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const stream = renderToNodeStream(reactMarkup);
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write(parts[1]);
    res.end();
  });
});

console.log(`listening on: ` + PORT);
app.listen(PORT);
