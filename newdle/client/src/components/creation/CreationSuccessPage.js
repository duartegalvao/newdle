import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {Redirect} from 'react-router-dom';
import {Trans, t} from '@lingui/macro';
import {Button, Container, Header} from 'semantic-ui-react';
import {getCreatedNewdle} from '../../selectors';
import {usePageTitle} from '../../util/hooks';
import NewdleLink from '../NewdleLink';
import styles from './CreationSuccessPage.module.scss';

export default function CreationSuccessPage() {
  const newdle = useSelector(getCreatedNewdle);
  const history = useHistory();
  usePageTitle('newdle created');

  if (!newdle) {
    return <Redirect to="/new" />;
  }

  const handleSummaryClick = () => {
    history.push(`/newdle/${newdle.code}/summary`);
  };

  return (
    <Container text>
      <Header as="h1" className={styles['newdle-title']}>
        {newdle.title}
      </Header>
      <div className={styles['newdle-link']}>
        <NewdleLink
          url={newdle.url}
          title={t`Done!`}
          description={
            newdle.participants.length !== 0
              ? t`Your newdle was created and invitation e-mails have been sent. You can send the
              following link to everyone you would like to invite:`
              : t`Your newdle was created. You can now send the following to everyone you would like to
              invite:`
          }
        />
      </div>
      <div className={styles['summary-button']}>
        <Button color="teal" onClick={handleSummaryClick}>
          <Trans>Go to newdle summary!</Trans>
        </Button>
      </div>
    </Container>
  );
}
