import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="box-container"
                style={{
                    backgroundColor: '#eb4c89',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    borderRadius: '10px',
                }}>
                <div className="box-item">
                    <div className="flip-box">
                        <div className="flip-box-front text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/frbd9towf/cta-2.png")' }}>
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Custom Domains</h3>
                                <p>A short sentence describing this callout is.</p>
                                <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"></img>
                            </div>
                        </div>
                        <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/frbd9towf/cta-2.png")' }}>
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Custom Domains</h3>
                                <p>A short sentence describing this callout is.</p>
                                <button className="flip-box-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-item">
                    <div className="flip-box">
                        <div className="flip-box-front text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/hj4c4qnov/cta-3.png")' }}>
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Never Sleeps</h3>
                                <p>A short sentence describing this callout is.</p>
                                <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"></img>
                            </div>
                        </div>
                        <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/hj4c4qnov/cta-3.png")' }}>
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Never Sleeps</h3>
                                <p>A short sentence describing this callout is.</p>
                                <button className="flip-box-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-item">
                    <div className="flip-box">
                        <div className="flip-box-front text-center filter-" style={{ backgroundImage: 'url("https://s25.postimg.cc/l2q9ujy4f/cta-4.png")' }}>
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Dedicated</h3>
                                <p>A short sentence describing this callout is.</p>
                                <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"></img>
                            </div>
                        </div>
                        <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/l2q9ujy4f/cta-4.png")' }}>
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Dedicated</h3>
                                <p>A short sentence describing this callout is.</p>
                                <button className="flip-box-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Card;