import { Box } from "@mui/material";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "../../../img/Banner1.png";
import banner2 from "../../../img/Banner2.png";
import banner3 from "../../../img/Banner3.png";

export const CarrosselBanners = () => {
    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);

    const onAutoplayTimeLeft = (_: any, time: number, progress: number) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty("--progress", (1 - progress).toString());
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <Box sx={{ width: "100%", position: "relative" }}>
            <Box sx={{ position: "absolute", right: 25, bottom: 25, zIndex: 20, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", color: "#ff0000", }}>
                <svg
                    ref={progressCircle}
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                    style={{
                        transform: "rotate(-90deg)",
                    }}
                >
                    <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="rgba(255, 0, 0, 0.3)"
                        strokeWidth="4"
                        fill="none"
                    />
                    <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="#ff0000"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="126"
                        strokeDashoffset="calc(126 * var(--progress))"
                        style={{ transition: "stroke-dashoffset 0.1s linear" }}
                    />
                </svg>
                <span
                    ref={progressContent}
                    style={{
                        position: "absolute",
                        fontSize: "12px",
                        color: "#ff0000",
                        fontWeight: 700,
                    }}
                />
            </Box>

            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false, }}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", }}
                speed={700}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                style={{ width: "100%", height: "100%"}}>
                <SwiperSlide>
                    <Box
                        component="img"
                        src={banner1}
                        sx={{ width: "100%", height: "100%", objectFit: "inherit", borderRadius: 4}}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        component="img"
                        src={banner2}
                        sx={{ width: "100%", height: "100%", objectFit: "inherit", borderRadius: 4}}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        component="img"
                        src={banner3}
                        sx={{ width: "100%", height: "100%", objectFit: "inherit" , borderRadius: 4}}
                    />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};
