'use client'
import Link from "next/link"
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function ChooseEmaar() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="service-one extra_spacing" id="emaar-at-a-glance" dir="rtl">
            <div className="container">
                <div className="sec-title">
                    <h2>نظرة عامة على إعمار</h2>
                </div>
                <div className="row">
                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaChartLine className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>+116,500</h2>
                                    <p>وحدة تم تسليمها حتى يوليو 2024.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaHouseUser className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>+30,000</h2>
                                    <p>منزل قيد التطوير حالياً في دولة الإمارات العربية المتحدة.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaKey className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>56%</h2>
                                    <p>نمو في مبيعات العقارات في النصف الأول من عام 2024.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaGlobe className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>+12</h2>
                                    <p>دولة — تواجد عالمي حقيقي.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-one__content-bottom" style={{display: "flex", justifyContent: "center"}}>
                    <div className="about-one__content-bottom-author-box">
                        <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="#contact-form">
                                    <span className="txt">سجّل اهتمامك</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
