<script setup lang="ts">
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Router,
    Search,
    ShoppingCart,
    Users
} from 'lucide-vue-next'

import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {Input} from '@/components/ui/input'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {Link} from "@inertiajs/vue3";
import {Toaster} from "vue-sonner";

const routes = [
    { name: 'Routers', icon: Router, href: 'routers.index' },
]
const currentRoute = (url: string) => {
    return route().current(url)
}
</script>

<template>
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div class="hidden border-r bg-muted/40 md:block">
            <div class="flex h-full max-h-screen flex-col gap-2">
                <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <a href="/" class="flex items-center gap-2 font-semibold">
                        <Package2 class="h-6 w-6"/>
                        <span class="">Wifi Internet</span>
                    </a>
                    <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                        <Bell class="h-4 w-4"/>
                        <span class="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div class="flex-1">
                    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link
                            v-for="rt in routes" :key="rt.href"
                            :href="route(rt.href)"
                            :class="['flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary', currentRoute(rt.href) ? 'bg-muted text-primary' : 'text-muted-foreground']"
                        >
                            <component :is="rt.icon" class="h-4 w-4"/>
                            {{ rt.name }}
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                    <SheetTrigger as-child>
                        <Button
                            variant="outline"
                            size="icon"
                            class="shrink-0 md:hidden"
                        >
                            <Menu class="h-5 w-5"/>
                            <span class="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" class="flex flex-col">
                        <nav class="grid gap-2 text-lg font-medium">
                            <a
                                href="#"
                                class="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 class="h-6 w-6"/>
                                <span class="sr-only">Acme Inc</span>
                            </a>
                            <Link
                                v-for="rt in routes" :key="rt.href"
                                :href="route(rt.href)"
                                :class="['flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary', currentRoute(rt.href) ? 'bg-muted text-primary' : 'text-muted-foreground']"
                            >
                                <component :is="rt.icon" class="h-4 w-4"/>
                                {{ rt.name }}
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div class="w-full flex-1">
                    <form>
                        <div class="relative">
                            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                            <Input
                                type="search"
                                placeholder="Search products..."
                                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                            />
                        </div>
                    </form>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="secondary" size="icon" class="rounded-full">
                            <CircleUser class="h-5 w-5"/>
                            <span class="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <Toaster position="top-right"/>
                <slot/>
            </main>
        </div>
    </div>
</template>
