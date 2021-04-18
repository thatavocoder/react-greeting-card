import React from 'react'
import { feelingsData } from '../feelings.json'
import Home from './Home'
import './CSS/content.css'

export default function Content(feeling) {
  if (feeling != 0) {
    return (
      <div>
        {feelingsData.map((data, key) => {
          if (feeling == data.id) {
            return (
              <div>
                <div className="head">Do you feel {data.feeling}?</div>
                <div className="row">
                  <div className="sectionhead col s10 m10 l6 offset-s1 offset-m1 offset-l3">Messages For You <i class="em em-heart"></i> <i class="em em-sparkles"></i></div>
                  {
                    data.message.map((url, key) => {
                      return (
                        <div className="col s12 m12 l8 offset-l2 textmsg">
                          <p style={{'textAlign':'center'}}>"{url.msg}"</p>
                          <p style={{'textAlign': 'right'}}>~ {url.by}</p>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="row">
                  <div className="sectionhead col s10 m10 l6 offset-s1 offset-m1 offset-l3" style={{ 'margin-top': '2vmin' }}>Videos For You <i class="em em-kissing_closed_eyes"></i> <i class="em em-eyes"></i></div>
                  {
                    data.yturl.map((url, key) => {
                      return (
                        <div className="centered col s12 m12 l6">
                          <div className="videos">
                            <div className="video-responsive">
                              <iframe
                                width="853"
                                height="480"
                                src={`https://www.youtube.com/embed/${url.url}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube" />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }
  else {
    return (
      <div>
        <Home />
      </div>
    )
  }
}
