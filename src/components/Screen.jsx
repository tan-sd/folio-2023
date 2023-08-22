import { Html } from "@react-three/drei";

export const Screen = () => {
    return (
        <Html
            className="screen"
            position={[0, 1.5, -10]}
            transform
        >
            <iframe src="https://my-room-in-3d-tan-sd.vercel.app/"></iframe>
        </Html>
    );
};
