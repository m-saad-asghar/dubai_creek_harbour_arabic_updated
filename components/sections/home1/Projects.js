'use client'
import Link from "next/link"
import { useState } from "react"
import TeamsListing from "@/components/TeamListing";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function Projects() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="why-one" id="why-choose-emaar" dir="rtl">
            <div className="container">
                <div className="sec-title">
                    <h2>لماذا تختار إعمار؟</h2>
                </div>
                <div className="text-box project_content">
                    <p>
                        تعتبر إعمار العقارية رائدة عالمياً في مجال التطوير العقاري، حيث تشتهر بإنشاء مجتمعات متكاملة 
                        وتشكيل مستقبل المعيشة الحديثة. امتلاك عقار من إعمار لا يعني مجرد استثمار — 
                        بل هو ثقة في اسم موثوق، وتمتع بأسلوب حياة فاخر، 
                        وانضمام إلى مجتمع نابض بالحياة في مدينة تحقق الأحلام وتحوّل الطموحات إلى واقع.
                    </p>
                </div>

                <TeamsListing/>
            </div>
        </section>
        </>
    )
}
