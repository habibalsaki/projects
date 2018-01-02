<?php

    require "app/bootstrap.php";

    $capture = new \Checking\Capture\Capture;

    $capture->load('cv.php', [
        'name' => $_POST['name']
    ]);

    $capture->respond('hello.pdf');