<?

declare(strict_types=1);
return static function (): void {


    $typeAddResult = CEventType::Add([
        'DESCRIPTION' => "",
        'EVENT_NAME' => 'PRODUCT_REQS_MAIL',
        'EVENT_TYPE' => 'email',
        'LID' => 's1',
        'NAME' => 'Обращения по партнерству',
    ]);

    if (!$typeAddResult) {
        throw new \RuntimeException('Failed to create event type.');
    }

    $messageManager = new CEventMessage();
    $messageAddResult = $messageManager->Add([
        'ACTIVE' => 'Y',
        'BCC' => '',
        'BODY_TYPE' => 'html',
        'EMAIL_FROM' => '#DEFAULT_EMAIL_FROM#',
        'EMAIL_TO' => 'null@example.org',
        'EVENT_NAME' => 'PRODUCT_REQS_MAIL',
        'LANGUAGE_ID' => 'ru',
        'LID' => 's1',
        'MESSAGE' => '#CONTENT#',
        'SITE_TEMPLATE_ID' => '',
        'SUBJECT' => 'Новое обращение по товару',
    ]);

    if (!$messageAddResult) {
        throw new \RuntimeException('Failed to create event message. ' . $messageManager->LAST_ERROR);
    }
};
