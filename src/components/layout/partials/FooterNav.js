import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0"> <FormattedMessage id="footer.contact" defaultMessage="Contact" /> </Link>
        </li>
        <li>
          <Link to="#0"> <FormattedMessage id="footer.aboutus" defaultMessage="About us" /> </Link>
        </li>
        <li>
          <Link to="#0"> <FormattedMessage id="footer.faq" defaultMessage="FAQ's" /> </Link>
        </li>
        <li>
          <Link to="#0"><FormattedMessage id="footer.support" defaultMessage="Support" /></Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
