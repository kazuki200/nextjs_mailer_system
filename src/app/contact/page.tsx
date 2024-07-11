"use client";
import {ChangeEvent, FormEvent, useState} from 'react';
import Row from "@/components/Row";
import Input from "@/components/Input";
import Select from "@/components/Select";

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        area: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert('成功')
        } else {
            alert('失敗')
        }
    }


    return (
        <main className="pt-32 px-6">
            <h1 className="lg:text-2xl text-xl leading-normal font-bold text-black text-center">フォームテスト</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-8 max-w-3xl mt-10 mx-auto">
                <Row htmlFor="name" label="名前">
                    <Input id="name" name="name" placeholder="お名前を入力してください" onChange={handleChange}
                           value={formData.name}/>
                </Row>
                <Row htmlFor="email" label="メールアドレス">
                    <Input id="email" name="email" placeholder="メールアドレスを入力してください"
                           onChange={handleChange} value={formData.email}/>
                </Row>
                <Row htmlFor="phone" label="電話番号">
                    <Input id="phone" name="phone" placeholder="お名前を入力してください" onChange={handleChange}
                           value={formData.phone}/>
                </Row>
                <Row htmlFor="area" label="エリア">
                    <Select id="area" name="area" options={[
                        {
                            value: "",
                            label: "選択してください"
                        },
                        {
                            value: "愛知県",
                            label: "愛知県"
                        },
                        {
                            value: "岐阜県",
                            label: "岐阜県"
                        },
                        {
                            value: "三重県",
                            label: "三重県"
                        },
                    ]} onChange={handleChange} value={formData.area}/>
                </Row>
                <button type="submit"
                        className="rounded-2xl bg-gray-400 text-black font-medium leading-normal text-base flex items-center justify-center mx-auto w-80 h-16 hover:opacity-70">送信する
                </button>
            </form>
        </main>

    );
};

export default Page;