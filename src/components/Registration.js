import React from "react";

const Registration = () => {
  return (
    <>
      {/*banner-section*/}
      <div className="banner-section">
        <h3 className="tittle">
          Single Page <i className="glyphicon glyphicon-file" />
        </h3>
        <div className="single">
          <img src="images/3.jpg" className="img-responsive" alt="" />
          <div className="b-bottom">
            <h5 className="top">
              <a href="#">What turn out consetetur sadipscing elit</a>
            </h5>
            <p className="sub">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard dummy text
              ever since,Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industryLorem Ipsum has been the
              industry's standard dummy text ever since Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <p>
              On Aug 25
              <a className="span_link" href="#">
                <span className="glyphicon glyphicon-comment" />0{" "}
              </a>
              <a className="span_link" href="#">
                <span className="glyphicon glyphicon-eye-open" />
                56
              </a>
            </p>
          </div>
        </div>
        <div className="single-bottom">
          <div className="single-middle">
            <ul className="social-share">
              <li>
                <span>SHARE</span>
              </li>
              <li>
                <a href="#">
                  <i> </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="tin"> </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="message"> </i>
                </a>
              </li>
            </ul>
            <a href="#">
              <i className="arrow"> </i>
            </a>
            <div className="clearfix" />
          </div>
        </div>
        <div className="response">
          <h4>Responses</h4>
          <div className="media response-info">
            <div className="media-left response-text-left">
              <a href="#">
                <img className="media-object" src="images/sin1.jpg" alt="" />
              </a>
              <h5>
                <a href="#">Username</a>
              </h5>
            </div>
            <div className="media-body response-text-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,There
                are many variations of passages of Lorem Ipsum available, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>Sep 21, 2015</li>
                <li>
                  <a href="single.html">Reply</a>
                </li>
              </ul>
              <div className="media response-info">
                <div className="media-left response-text-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/sin2.jpg"
                      alt=""
                    />
                  </a>
                  <h5>
                    <a href="#">Username</a>
                  </h5>
                </div>
                <div className="media-body response-text-right">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit,There are many variations of passages of Lorem Ipsum
                    available, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                  <ul>
                    <li>July 17, 2015</li>
                    <li>
                      <a href="single.html">Reply</a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="media response-info">
            <div className="media-left response-text-left">
              <a href="#">
                <img className="media-object" src="images/sin1.jpg" alt="" />
              </a>
              <h5>
                <a href="#">Username</a>
              </h5>
            </div>
            <div className="media-body response-text-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,There
                are many variations of passages of Lorem Ipsum available, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>Mar 28, 2015</li>
                <li>
                  <a href="single.html">Reply</a>
                </li>
              </ul>
              <div className="media response-info">
                <div className="media-left response-text-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/sin2.jpg"
                      alt=""
                    />
                  </a>
                  <h5>
                    <a href="#">Username</a>
                  </h5>
                </div>
                <div className="media-body response-text-right">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit,There are many variations of passages of Lorem Ipsum
                    available, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                  <ul>
                    <li>Feb 19, 2015</li>
                    <li>
                      <a href="single.html">Reply</a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="coment-form">
          <h4>Leave your comment</h4>
          <form>
            <input
              type="text"
              defaultValue="Name "
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Name';}"
              required
            />
            <input
              type="email"
              defaultValue="Email"
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Email (will not be published)*';}"
              required
            />
            <input
              type="text"
              defaultValue="Website"
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Website';}"
              required
            />
            <textarea
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Your Comment...';}"
              required
              defaultValue={"Your Comment..."}
            />
            <input type="submit" defaultValue="Submit Comment" />
          </form>
        </div>
        <div className="clearfix" />
      </div>
      {/*//banner*/}
      {/*//banner-section*/}
      <div className="banner-right-text">
        <h3 className="tittle">
          News <i className="glyphicon glyphicon-facetime-video" />
        </h3>
        {/*/general-news*/}
        <div className="general-news">
          <div className="general-inner">
            <div className="general-text">
              <a href="#">
                <img src="images/gen1.jpg" className="img-responsive" alt="" />
              </a>
              <h5 className="top">
                <a href="#">Consetetur sadipscing elit</a>
              </h5>
              <p>
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt labore dolore magna aliquyam eratsed diam justo duo
                dolores rebum.
              </p>
              <p>
                On Jun 25
                <a className="span_link" href="#">
                  <span className="glyphicon glyphicon-comment" />0{" "}
                </a>
                <a className="span_link" href="#">
                  <span className="glyphicon glyphicon-eye-open" />
                  56{" "}
                </a>
                <a className="span_link" href="#">
                  <span className="glyphicon glyphicon-circle-arrow-right" />
                </a>
              </p>
            </div>
            <div className="edit-pics">
              <div className="editor-pics">
                <div className="col-md-3 item-pic">
                  <img src="images/f4.jpg" className="img-responsive" alt="" />
                </div>
                <div className="col-md-9 item-details">
                  <h5 className="inner two">
                    <a href="#">New iPad App to simulate your Guitar</a>
                  </h5>
                  <div className="td-post-date two">
                    <i className="glyphicon glyphicon-time" />
                    Feb 22, 2015
                    <a href="#">
                      <i className="glyphicon glyphicon-comment" />0
                    </a>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="editor-pics">
                <div className="col-md-3 item-pic">
                  <img src="images/f1.jpg" className="img-responsive" alt="" />
                </div>
                <div className="col-md-9 item-details">
                  <h5 className="inner two">
                    <a href="#">New iPad App to simulate your Guitar</a>
                  </h5>
                  <div className="td-post-date two">
                    <i className="glyphicon glyphicon-time" />
                    Feb 22, 2015
                    <a href="#">
                      <i className="glyphicon glyphicon-comment" />0
                    </a>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="editor-pics">
                <div className="col-md-3 item-pic">
                  <img src="images/f1.jpg" className="img-responsive" alt="" />
                </div>
                <div className="col-md-9 item-details">
                  <h5 className="inner two">
                    <a href="#">New iPad App to simulate your Guitar</a>
                  </h5>
                  <div className="td-post-date two">
                    <i className="glyphicon glyphicon-time" />
                    Feb 22, 2015
                    <a href="#">
                      <i className="glyphicon glyphicon-comment" />0
                    </a>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="editor-pics">
                <div className="col-md-3 item-pic">
                  <img src="images/f4.jpg" className="img-responsive" alt="" />
                </div>
                <div className="col-md-9 item-details">
                  <h5 className="inner two">
                    <a href="#">New iPad App to simulate your Guitar</a>
                  </h5>
                  <div className="td-post-date two">
                    <i className="glyphicon glyphicon-time" />
                    Feb 22, 2015
                    <a href="#">
                      <i className="glyphicon glyphicon-comment" />0
                    </a>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="media">
              <h3 className="tittle media">
                Media <i className="glyphicon glyphicon-floppy-disk" />
              </h3>
              <div className="general-text two">
                <a href="#">
                  <img
                    src="images/gen3.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <h5 className="top">
                  <a href="#">Consetetur sadipscing elit</a>
                </h5>
                <p>
                  Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt labore dolore magna aliquyam eratsed diam justo duo
                  dolores rebum.
                </p>
                <p>
                  On Jun 27
                  <a className="span_link" href="#">
                    <span className="glyphicon glyphicon-comment" />0{" "}
                  </a>
                  <a className="span_link" href="#">
                    <span className="glyphicon glyphicon-eye-open" />
                    56{" "}
                  </a>
                  <a className="span_link" href="#">
                    <span className="glyphicon glyphicon-circle-arrow-right" />
                  </a>
                </p>
              </div>
            </div>
            <div className="general-text two">
              <a href="#">
                <img src="images/gen2.jpg" className="img-responsive" alt="" />
              </a>
              <h5 className="top">
                <a href="#">Consetetur sadipscing elit</a>
              </h5>
              <p>
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt labore dolore magna aliquyam eratsed diam justo duo
                dolores rebum.
              </p>
              <p>
                On Jun 27
                <a className="span_link" href="#">
                  <span className="glyphicon glyphicon-comment" />0{" "}
                </a>
                <a className="span_link" href="#">
                  <span className="glyphicon glyphicon-eye-open" />
                  56{" "}
                </a>
                <a className="span_link" href="#">
                  <span className="glyphicon glyphicon-circle-arrow-right" />
                </a>
              </p>
            </div>
          </div>
        </div>
        {/*//general-news*/}
        {/*/news*/}
        {/*/news*/}
      </div>
      <div className="clearfix" />
    </>
  );
};

export default Registration;
