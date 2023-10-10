import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
    return this.toString();
};

export async function POST(req, res) {
    try {
        const tag = await prisma.tag.create({
            data: {
                title: "bangladesh",
                metaTitle: "bangladesh tag",
                slug: "bangladesh",
                context: "abc",
            },
        });
        return NextResponse.json({ msg: "success", tag });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET() {
    try {
        const tag = await prisma.tag.findMany();
        return NextResponse.json({ msg: "success", tag });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT() {
    try {
        const tag = await prisma.tag.update({
            where: { id: 2 },
            data: {
                title: "modify title",
            },
        });
        return NextResponse.json({ msg: "success", tag });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE() {
    try {
        const tag = await prisma.tag.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", tag });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
