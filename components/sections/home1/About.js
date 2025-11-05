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
                                    <h2>مرحباً بكم في دبي هيلز استيت</h2>
                                </div>

                                <div className="text-box">
                                    <p>يقع دبي هيلز استيت من إعمار في قلب دبي، ويُعدّ مجمّعاً فاخراً يجسّد مفهوماً راقياً للحياة العصرية المتكاملة. يضمّ مجموعة مميزة من الفلل والشقق الفاخرة، مقدّماً فرصة استثمارية استثنائية في واحد من أكثر أسواق العقار ازدهاراً في المنطقة. يتميّز هذا المجتمع بتصميمه المتقن وتوازنه المثالي بين الحداثة والطبيعة، ليمنح سكانه أسلوب حياة راقٍ ينبض بالراحة والرفاهية.</p><br/>
                                    <p>كما يُعدّ دبي هيلز استيت محوراً رئيسياً للمشاريع العقارية المستقبلية في دبي، ما يجعله وجهة مفضّلة للمستثمرين الطامحين إلى اقتناص الفرص في مشاريع تُعيد رسم ملامح أفق المدينة المتطوّر. وبفضل إطلالاته البانورامية على معالم بارزة مثل برج خليفة، يرسّخ هذا المجمّع مكانته كرمز للرؤية الطموحة لدبي في بناء مجتمعات عقارية عالمية المستوى.</p><br/>
                                </div>
                            </div>
                        </div>

                        <div className="about-one__content-bottom centerize" style={{display: "flex", justifyContent: "center"}}>
                            <div className="about-one__content-bottom-author-box">
                                <div className="btn-box">
                                    <div className="btn-one">
                                        <Link className="thm-btn" href="#contact-form">
                                            <span className="txt">سجل اهتمامك</span>
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
