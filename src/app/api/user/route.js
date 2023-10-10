import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Create User
export async function POST(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const result = await prisma.user.create({
            data: {
                firstName: "Mehedi",
                middleName: "Hasan",
                lastName: "",
                mobile: "0123456",
                email: "test@test.com",
                passwordHash: "123",
                intro: "hi there",
                profile: "I'm Mehedi",
            },
        });
        return NextResponse.json({ msg: "success", result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: "failled" });
    }
}

// Read User
export async function GET(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const result = await prisma.user.findMany();
        return NextResponse.json({ msg: "success", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "failled" });
    }
}

// Update User
export async function PUT(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const result = await prisma.user.update({
            where: {
                id: 2,
            },
            data: {
                firstName: "Amit",
            },
        });
        return NextResponse.json({ msg: "success", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "failled" });
    }
}

// Delete User
export async function DELETE(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const result = await prisma.user.delete({
            where: {
                id: 3,
            },
        });
        return NextResponse.json({ msg: "success", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "failled" });
    }
}
