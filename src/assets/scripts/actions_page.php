<?php
function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$data = ($method === 'POST') ? $_POST : $_GET;
?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Form Received</title>
  <link rel="stylesheet" href="/assets/theme.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    .card { max-width: 640px; margin: 1.5rem auto; background:#fff; border:1px solid #e6e6e6; border-radius:10px; padding:1rem; }
    dt { font-weight:600; } dd { margin:0 0 .75rem; }
    a.btn { display:inline-block; margin-top:1rem; border:1px solid #e6e6e6; padding:.45rem .8rem; border-radius:.375rem; text-decoration:none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Submission Received</h1>
    <p>This page echoes what you sent.</p>
    <dl>
      <dt>HTTP Method</dt><dd><?php echo h($method); ?></dd>
      <?php foreach ($data as $k => $v): ?>
        <dt><?php echo h($k); ?></dt><dd><?php echo h($v); ?></dd>
      <?php endforeach; ?>
    </dl>
    <a class="btn" href="/">Back to homepage</a>
  </div>
</body>
</html>
