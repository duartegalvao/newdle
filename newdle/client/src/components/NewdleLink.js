import React from 'react';
import {t} from '@lingui/macro';
import propTypes from 'prop-types';
import {Button, Header, Input, Popup} from 'semantic-ui-react';
import styles from './NewdleLink.module.scss';

export default function NewdleLink({url, title, description}) {
  return (
    <div className={styles['success-message']}>
      <Header as="h3" className={styles['header']}>
        {title}
      </Header>
      <p>{description}</p>
      <Input
        className={styles['newdle-link']}
        fluid
        readOnly
        value={url}
        onFocus={evt => {
          evt.target.select();
        }}
        action={
          navigator.clipboard && (
            <Popup
              content={t`Copied!`}
              on="click"
              position="top center"
              inverted
              trigger={
                <Button
                  icon="copy"
                  title={t`Copy to clipboard`}
                  onClick={() => navigator.clipboard.writeText(url)}
                />
              }
            />
          )
        }
      />
    </div>
  );
}

NewdleLink.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string,
  description: propTypes.string,
};

NewdleLink.defaultProps = {
  title: t`Shareable link`,
  description: t`You can send the following to everyone you would like to invite:`,
};
