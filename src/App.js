import "./App.css";
import classNames from "classnames";
import { useEffect, useState } from "react";

function App() {
	const [curBg, setCurBG] = useState("bg1");
	const [isShowTip, setShow] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	const changeBG = (e) => {
		let bg = e.target.getAttribute("data-bg");
		if (bg) {
			console.log(bg);
			setCurBG(bg);
		}
	};

	const scrollHandler = () => {
		let scrollTop = document.documentElement.scrollTop;
		// let clientHeight = document.documentElement.clientHeight
		let scrollHeight = document.documentElement.scrollHeight;
		// console.log(scrollHeight);
		console.log(scrollTop - scrollHeight / 2);
		setScrollY(scrollTop - scrollHeight / 2);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);

		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	return (
		<div className="App">
			<div className={classNames("home", curBg)}>
				<div className="header">
					<svg
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="162.000000pt"
						height="41.000000pt"
						viewBox="0 0 162.000000 41.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,41.000000) scale(0.100000,-0.100000)"
							fill="#333333"
							stroke="none"
						>
							<path
								d="M1171 321 c-30 -8 -38 -27 -14 -33 11 -3 19 -15 20 -29 1 -13 5 -34
8 -46 4 -16 -1 -25 -15 -33 -11 -6 -20 -17 -20 -25 0 -19 -2 -19 44 5 22 10
43 17 48 14 13 -8 -1 -24 -21 -24 -10 0 -24 -7 -31 -15 -7 -8 -22 -15 -33 -15
-20 0 -20 -1 -5 -16 13 -13 20 -14 38 -4 12 6 24 9 27 6 7 -7 -33 -23 -82 -32
-33 -6 -35 -8 -19 -17 28 -16 164 -17 164 -2 0 7 -7 18 -15 25 -19 16 -19 24
2 67 14 30 14 36 2 44 -8 5 -25 7 -37 4 -15 -4 -21 -2 -17 5 3 5 1 10 -4 10
-6 0 -11 5 -11 11 0 8 4 9 13 0 8 -6 16 -8 19 -5 3 3 27 7 54 10 56 5 62 9 48
32 -14 22 -59 30 -51 9 4 -11 -3 -16 -29 -19 -33 -4 -45 4 -24 17 6 3 10 19
10 36 0 31 -15 35 -69 20z"
							/>
							<path
								d="M800 305 c-7 -8 -24 -15 -38 -15 l-25 0 23 -25 c13 -14 29 -25 35
-25 18 0 68 57 61 69 -10 16 -42 13 -56 -4z"
							/>
							<path
								d="M350 289 l-35 -18 30 -2 c17 -1 37 -2 46 -1 12 1 19 -10 24 -35 8
-45 60 -113 84 -113 10 0 31 10 46 22 26 20 27 22 9 35 -10 7 -29 13 -42 13
-24 0 -25 -1 -7 -20 16 -17 16 -20 2 -20 -21 0 -49 29 -40 43 3 7 3 9 -2 5
-14 -13 -35 13 -29 36 3 14 -3 32 -16 49 -25 31 -24 31 -70 6z"
							/>
							<path
								d="M1104 242 c-18 -11 -29 -23 -26 -32 6 -19 33 -50 44 -50 12 0 10 38
-3 42 -9 3 -9 10 0 27 14 24 26 19 34 -14 4 -12 5 -9 4 9 -2 36 -13 40 -53 18z"
							/>
							<path
								d="M816 225 c-48 -45 -129 -69 -139 -42 -4 7 -6 6 -6 -4 -1 -24 25 -42
62 -41 l32 1 -37 -35 c-66 -60 -36 -91 51 -53 41 17 51 26 51 45 0 24 -14 32
-25 14 -3 -5 -11 -10 -17 -10 -6 0 12 24 41 54 54 58 58 65 39 84 -17 17 -21
15 -52 -13z"
							/>
							<path
								d="M320 218 c-1 -40 -38 -111 -55 -104 -13 5 -13 2 1 -20 18 -27 41 -27
36 0 -4 24 38 84 64 90 22 6 40 34 29 45 -3 3 -14 0 -25 -6 -14 -10 -19 -9
-24 2 -8 23 -26 18 -26 -7z"
							/>
							<path
								d="M260 201 c0 -5 -3 -18 -6 -28 -6 -16 -5 -16 9 2 19 23 21 35 7 35 -5
0 -10 -4 -10 -9z"
							/>
							<path
								d="M366 141 c3 -9 10 -30 14 -47 4 -18 10 -36 14 -42 8 -14 -25 -32 -59
-32 -15 0 -24 -4 -20 -10 3 -6 28 -10 54 -10 36 0 53 5 67 21 18 20 18 21 -14
47 -24 21 -29 31 -22 42 16 25 11 37 -16 43 -20 4 -24 1 -18 -12z"
							/>
							<path
								d="M857 108 c15 -16 20 -31 16 -50 -4 -20 -1 -30 12 -34 20 -8 30 2 39
39 5 23 2 30 -26 47 -46 28 -68 27 -41 -2z"
							/>
						</g>
					</svg>
					<ul className="nav">
						<li>
							<a href="http://blog.xueyunfeng.top">博客</a>
						</li>
						<li>
							<a href="#about">关于</a>
						</li>
					</ul>
				</div>
				<div
					className="cube"
					onClick={changeBG}
					onMouseEnter={() => setShow(true)}
					onMouseLeave={() => setShow(false)}
				>
					<div>
						<div data-bg="bg1" className={"bg1"}></div>
						<div data-bg="bg2" className={"bg2"}></div>
						<div data-bg="bg3" className={"bg3"}></div>
						<div data-bg="bg4" className={"bg4"}></div>
						<div data-bg="bg5" className={"bg5"}></div>
						<div data-bg="bg6" className={"bg6"}></div>
					</div>
				</div>
				{isShowTip && (
					<div className="tip">
						<span className="icon">
							<svg
								className="icon"
								width="16px"
								height="16.00px"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="#fbfbfb"
									d="M512 504.32m-314.88 0a12.3 12.3 0 1 0 629.76 0 12.3 12.3 0 1 0-629.76 0ZM560.64 972.8l-94.72 0c-15.36 0-25.6 10.24-25.6 25.6 0 15.36 10.24 25.6 25.6 25.6l94.72 0c15.36 0 25.6-10.24 25.6-25.6C586.24 985.6 573.44 972.8 560.64 972.8zM627.2 867.84l-230.4 0c-15.36 0-25.6 10.24-25.6 25.6 0 15.36 10.24 25.6 25.6 25.6l230.4 0c15.36 0 25.6-10.24 25.6-25.6C652.8 878.08 640 867.84 627.2 867.84zM514.56 130.56c15.36 0 25.6-10.24 25.6-25.6L540.16 25.6c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6l0 79.36C488.96 117.76 499.2 130.56 514.56 130.56zM243.2 235.52c10.24-10.24 10.24-25.6 0-35.84L189.44 143.36c-10.24-10.24-25.6-10.24-35.84 0C143.36 153.6 143.36 168.96 151.04 179.2l56.32 56.32C217.6 245.76 235.52 245.76 243.2 235.52zM104.96 478.72 25.6 478.72c-15.36 0-25.6 10.24-25.6 25.6 0 15.36 10.24 25.6 25.6 25.6l79.36 0c15.36 0 25.6-10.24 25.6-25.6C130.56 488.96 117.76 478.72 104.96 478.72zM998.4 481.28l-79.36 0c-15.36 0-25.6 10.24-25.6 25.6 0 15.36 10.24 25.6 25.6 25.6L998.4 532.48c15.36 0 25.6-10.24 25.6-25.6C1024 494.08 1013.76 481.28 998.4 481.28zM844.8 140.8l-56.32 56.32c-10.24 10.24-10.24 25.6 0 35.84 10.24 10.24 25.6 10.24 35.84 0l56.32-56.32c10.24-10.24 10.24-25.6 0-35.84C870.4 130.56 852.48 130.56 844.8 140.8z"
								/>
							</svg>
						</span>
						点击切换背景
					</div>
				)}
			</div>
			<div
				className="about"
				id="about"
				style={{
					backgroundPosition: `calc(0% + ${scrollY}px) calc(0% + ${scrollY}px)`,
				}}
			>
				{"About"}
				<div className="message">
					<p>个人网站---风云雪</p>
					<p>
						设计：<span>xueyunfeng</span>
					</p>
					<p>
						开发：<span>xueyunfeng</span>
					</p>
					<p>
						维护：<span>xueyunfeng</span>
					</p>
					<p>
						邮箱：<span>1270309892@qq.com</span>
					</p>
				</div>
				<div className="footer">
					<p>风云雪 ©2022 Created by xueyunfeng</p>
					<a
						href="https://beian.miit.gov.cn"
						target={"_blank"}
						rel="noreferrer"
					>
						苏ICP备2022024806号-1
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
