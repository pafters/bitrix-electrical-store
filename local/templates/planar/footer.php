<?
global $APPLICATION;
$currentPage = $APPLICATION->GetCurPage();
?>

<? if (strpos($currentPage, '/catalog') === false && $currentPage !== '/') : ?>
  </div>
  </main>
<? endif; ?>

<footer id="contacts-footer" class="footer footer-planar nav-section">
  <div class="container">
    <div class="footer__wrapper">
      <div class="footer__content">
        <div data-sal="slide-up" data-sal-duration="900" class="footer__logo">
          <svg viewBox="0 0 258 183" class="logo_big_svg">
            <use xlink:href="#logo_big"></use>
          </svg>
        </div>
        <div class="footer__contacts contacts-footer">
          <? $APPLICATION->IncludeComponent(
            "bitrix:menu",
            "bottom",
            array(
              "ALLOW_MULTI_SELECT" => "N",
              "CHILD_MENU_TYPE" => "bottom",
              "DELAY" => "N",
              "MAX_LEVEL" => "1",
              "MENU_CACHE_GET_VARS" => array(""),
              "MENU_CACHE_TIME" => "3600",
              "MENU_CACHE_TYPE" => "N",
              "MENU_CACHE_USE_GROUPS" => "Y",
              "ROOT_MENU_TYPE" => "bottom",
              "USE_EXT" => "N"
            )
          ); ?>
          <div data-sal="slide-left" data-sal-duration="900" data-sal-delay="400" class="contacts-footer__quality">
            <p class="contacts-footer__text">
              <? $APPLICATION->IncludeComponent(
                "bitrix:main.include",
                ".default",
                array(
                  "AREA_FILE_SHOW" => "file",
                  "AREA_FILE_SUFFIX" => "inc",
                  "EDIT_TEMPLATE" => "",
                  "PATH" => "local/include/footer/contacts-footer__text.php",
                  "COMPONENT_TEMPLATE" => ".default"
                ),
                false
              ); ?>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<div class="overlay"></div>
<script src="https://unpkg.com/element-closest/browser"></script>
</body>

</html>