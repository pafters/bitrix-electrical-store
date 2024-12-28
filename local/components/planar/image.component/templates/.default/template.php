<?php

if (!defined('B_PROLOG_INCLUDED') || (B_PROLOG_INCLUDED !== true)) {
    exit;
}

?>

<a href="<?= htmlspecialchars($arParams['~IMAGE']); ?>">
    <img src="<?= htmlspecialchars($arParams['~IMAGE']); ?>" alt="<?=  htmlspecialchars(basename($arParams['~IMAGE']));?>">
</a>
