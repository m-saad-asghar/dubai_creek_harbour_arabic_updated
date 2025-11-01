import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"

export default function About() {
    return (
        <>
            {/*Start About One */}
            <section className="about-one" id="welcome-to-dubai" dir="rtl">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container">
                    <div className="row">
                        {/*Start About One Img */}
                        <div className="col-xl-5 wow animated fadeInRight full_height" data-wow-delay="0.1s">
                            <div className="about-one__img" style={{height: 500}}>
                                <div className="inner full_height">
                                    <img src="assets/img/gallery/dubai_hills_estate_about_us.png" alt="مرحبًا بكم في دبي هيلز إستيت" className="full_height"/>
                                </div>
                            </div>
                        </div>
                        {/*End About One Img */}

                        {/*Start About One Content */}
                        <div className="col-xl-7 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <h2>مرحبًا بكم في دبي هيلز إستيت</h2>
                                </div>

                                <div className="text-box">
                                    <p>موطن للمعالم الشهيرة مثل مرسى خور دبي ومحمية رأس الخور للحياة البرية، يجمع خور دبي بين الأناقة الحضرية والجمال الطبيعي. استمتع بالمشي على طول البحيرات الهادئة وتناول الطعام على الواجهة البحرية ومشاهدة مناظر بانورامية لأفق المدينة.</p><br/>
                                    <p>بموقعه المثالي بالقرب من وسط مدينة دبي ومطار دبي الدولي والتوسعة القادمة للمترو، يوفر خور دبي مستوى لا مثيل له من الراحة ونمط الحياة.</p><br/>
                                    <p>اكتشف شققًا أنيقة وبنتهاوس وفنادق مثل فيدا كريك هاربر، العنوان هاربر بوينت، وقصر الإقامة — جميعها تقدم وسائل راحة عالمية المستوى وتجارب تسوق وترفيه في وجهة واجهة بحرية نابضة بالحياة.</p><br/>
                                </div>
                            </div>
                        </div>

                        <div className="about-one__content-bottom centerize" style={{display: "flex", justifyContent: "center"}}>
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
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About One */}
        </>
    )
}
