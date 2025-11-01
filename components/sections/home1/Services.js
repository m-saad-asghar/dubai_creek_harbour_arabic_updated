'use client'
import Link from "next/link"
import { useState } from "react"
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function Pricing() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="service-one" id="why-invest-in-dubai" dir="rtl">
            <div className="container">
                <div className="sec-title">
                    <h2>لماذا تستثمر في دبي؟</h2>
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
                                    <h2 style={{color: "#ffffff"}}>عوائد إيجارية مرتفعة</h2>
                                    <p>عائد سنوي يتراوح بين 5% إلى 9%.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaHouseUser className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>عقارات فاخرة بأسعار منافسة</h2>
                                    <p>رفاهية بتكلفة أقل.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaKey className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>ملكية خالية من الضرائب</h2>
                                    <p>لا توجد ضرائب على العقارات مطلقاً.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaGlobe className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>سهولة الوصول العالمية</h2>
                                    <p>رحلات مباشرة إلى أهم مدن العالم.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaPlane className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>السياحة وأسلوب الحياة</h2>
                                    <p>شواطئ، مراكز تسوق، معالم سياحية وفنادق عالمية.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaUsers className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>آمنة ومثالية للعائلات</h2>
                                    <p>من أكثر المدن أمانًا في العالم.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaBriefcase className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>مركز عالمي للأعمال والتجارة</h2>
                                    <p>وجهة مفضلة للمستثمرين الدوليين.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaPassport className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>تأشيرة الإقامة الذهبية في الإمارات</h2>
                                    <p>تأشيرات ذهبية وخضراء للمستثمرين.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaCity className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>مدينة جاهزة للمستقبل</h2>
                                    <p>تركز على التكنولوجيا والطاقة الخضراء والصحة والتعليم.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaStar className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>مكافآت إعمار الحصرية</h2>
                                    <p>امتيازات بلاتينية وذهبية للمستثمرين المميزين.</p>
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
                                    <span className="txt">تسجيل الاهتمام</span>
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
