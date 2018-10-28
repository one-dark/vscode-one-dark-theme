<?php

namespace wcf\system;
use wcf\acp\form\MasterPasswordForm;

class WCFACP extends WCF {
    /**
     * rescue mode
     * @var boolean
     */
    protected static $inRescueMode;

    /**
     * URL to WCF within rescue mode
     * @var string
     */
    protected static $rescueModePageURL;

    /** @noinspection PhpMissingParentConstructorInspection */
    /**
     * Calls all init functions of the WCF and the WCFACP class
     */
    public function __construct() {
        // Add autoload directory
        self::$autoloadDirectories['wcf'] = WCF_DIR . 'lib/';
    }
}
