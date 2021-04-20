// @flow
import React, { Component } from 'react';

import { connect } from 'getstream';
import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
  InfiniteScrollPaginator,
} from 'react-activity-feed';

import 'react-activity-feed/dist/index.es.css';


// client = stream.connect('5r5cn6dk4hcs', null, '1120553');
const apiKey = '56ngat98cs7g';
const appId = '1120536';
const token =
//generated using the token.js --type node token
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiamVmZiJ9.EcyKS2n6qpv8wiuPRpBy9Trmffx-Bn-cyo3Lks-OK6Y';
const client = connect(apiKey, token, appId);
client.user('jeff').get()
console.log(client)
export default class App extends Component<{}> {
  containerRef = React.createRef();
  render() {
    return (
      <div
        ref={this.containerRef}
        style={{
          maxWidth: '600px',
          // maxHeight: '500px',
          // overflow: 'scroll',
          margin: '0 auto',
        }}
      >
        <StreamApp apiKey={apiKey} appId={appId} token={token}>
          <div
            style={{
              background: '#fff', //#1A1A14
              height: 60,
              borderRadius: 4,
              margin: '10px 0',
              padding: '0 20px',
              boxShadow: '0px 0px 4px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <h3>React Activity Feed</h3>
            <NotificationDropdown arrow right />
          </div>
          <StatusUpdateForm
          // submitHandler={(e) => {
          //   alert(e);
          // }}
          />
          <FlatFeed
            feedGroup="user" // or timeline
            userId='jeff'
            notify
            options={{
              limit: 6,
              // withOwnChildren: true,
              // withRecentReactions: true
            }}
            Paginator={(props) => (
              <InfiniteScrollPaginator
                useWindow={false}
                threshold={10}
                {...props}
                getScrollParent={() => this.containerRef}
              />
            )}
            Activity={(activityProps) => (
              <Activity
                {...activityProps}
                Footer={() => (
                  <React.Fragment>
                    <CommentField
                      activity={activityProps.activity}
                      onAddReaction={activityProps.onAddReaction}
                    />
                    <CommentList
                      activityId={activityProps.activity.id}
                      CommentItem={(props) => (
                        <React.Fragment>
                          <CommentItem {...props} />
                          <LikeButton
                            reaction={props.comment}
                            {...activityProps}
                          />
                        </React.Fragment>
                      )}
                    />
                  </React.Fragment>
                )}
              />
            )}
          />
        </StreamApp>
      </div>
    );
  }
}