
<html>
<head lang="en">
<meta charset="UTF-8">
<title> Quiz </title>
<link rel="stylesheet" type="text/css" href="style1.css">
</head>
<body>
<!-- Navbar Section start from here ⭐⭐ -->
    <header>
      <img src="images/logo.png" />
      <nav>
        <ul>
          <li><a href="first.php">Home</a></li>
          <li><a href="index.php">Buy Online</a></li>
          <li><a href="index1.php">Quiz</a></li>
        </ul>
      </nav>
    </header>
<div class="grid">
<div id="quiz">
<h1> QUIZ </h1>
<hr style="margin-bottom: 20px">
<p id="question"> </p>

<div class="button">
<button id="bt0"> <span id="choice0"> </span> </button><br>
<button id="bt1"> <span id="choice1"> </span> </button><br>
<button id="bt2"> <span id="choice2"> </span> </button><br>
<button id="bt3"> <span id="choice3"> </span> </button>

</div>

<hr style="margin-top: 50px">

<footer>
<p id="progress"> Question x of y</p>
</footer>
</div>
</div>

<script src="quiz.js"> </script>
<script src="question.js"> </script>
<script src="app.js"> </script>

</body>

</html>
