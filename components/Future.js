import Link from "next/link"
export default function Future() {
    return (
        <>
            {/*Start About One */}
            <section id="future-of-waterfront" dir="rtl">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container future_container">
                    <div className="row">
                        <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content" style={{marginLeft: 0}}>
                                <div className="sec-title">
                                    <h2>مستقبل الحياة على الواجهة المائية</h2>
                                </div>

                                <div className="text-box">
                                    <p>اكتشف التناغم المثالي بين الهدوء والصحة والرفاهية في خور دبي. يجمع هذا المجتمع النابض بالحياة بين أسلوب الحياة الهادئ على الواجهة المائية والممرات النشطة ومرافق العافية والإطلالات الخلابة على المرسى وأفق دبي.</p><br/>
                                    <p>استمتع بجلسات اليوغا الصباحية بجانب الماء، أو تناول الطعام في الهواء الطلق، أو قم بنزهة مريحة على طول الخور الخلاب. استرخِ بجانب المسبح اللامتناهي المطل على برج خليفة أو استكشف الحي برحلة دراجات ذات مناظر خلابة.</p><br/>
                                    <p>سواء كنت تبحث عن منزل للعيش أو للاستثمار، يقدم خور دبي قيمة استثنائية من خلال مجموعته من الشقق المكونة من غرفة إلى ثلاث غرف نوم، والمنازل العائلية، والبنتهاوس الفاخرة — جميعها مصممة بأناقة عصرية وتصميم عالمي المستوى.</p>
                                </div>

                                <div className="about-one__content-bottom future_btn" style={{display: "flex", justifyContent: "center"}}>
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
                        </div>
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About One */}
        </>
    )
}
