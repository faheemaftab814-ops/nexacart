'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  Bell,
  Boxes,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Eye,
  LayoutGrid,
  Menu,
  Moon,
  MoreHorizontal,
  Package,
  Pencil,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  SunMedium,
  Trash2,
  Users,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const navItems = [
  { label: 'Dashboard', icon: LayoutGrid },
  { label: 'Products', icon: Package, active: true },
  { label: 'Categories', icon: Boxes },
  { label: 'Orders', icon: ShoppingBag },
  { label: 'Customers', icon: Users },
  { label: 'Reviews', icon: Star },
  { label: 'Coupons', icon: CreditCard },
  { label: 'Reports', icon: BarChart3 },
  { label: 'Settings', icon: Settings },
];

const productRows = [
  {
    id: 1,
    name: 'Aurora Leather Tote',
    category: 'Bags',
    price: '$248',
    stock: '24',
    status: 'Active',
    accent: 'from-amber-500/70 to-orange-500/70',
  },
  {
    id: 2,
    name: 'Lumen Knit Jacket',
    category: 'Outerwear',
    price: '$164',
    stock: '9',
    status: 'Low Stock',
    accent: 'from-sky-500/70 to-cyan-500/70',
  },
  {
    id: 3,
    name: 'Sora Ceramic Set',
    category: 'Home',
    price: '$86',
    stock: '31',
    status: 'Active',
    accent: 'from-emerald-500/70 to-lime-500/70',
  },
  {
    id: 4,
    name: 'Halo Watch',
    category: 'Accessories',
    price: '$310',
    stock: '5',
    status: 'Draft',
    accent: 'from-violet-500/70 to-fuchsia-500/70',
  },
];

function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <aside className={`flex flex-col border-r border-border/60 bg-background/80 backdrop-blur-xl transition-all duration-300 ${collapsed ? 'w-20' : 'w-72'}`}>
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
            N
          </div>
          {!collapsed ? <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">NexaCart</p><p className="text-sm text-foreground">Admin</p></div> : null}
        </div>
        <button type="button" onClick={onToggle} className="hidden rounded-full border border-border/60 bg-background/80 p-2 text-muted-foreground transition hover:text-foreground lg:inline-flex">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href="#"
              className={`flex items-center gap-3 rounded-[1rem] px-3 py-3 text-sm font-medium transition ${item.active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}
            >
              <Icon className="h-4 w-4" />
              {!collapsed ? <span>{item.label}</span> : null}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border/60 p-4">
        <div className={`rounded-[1rem] border border-border/60 bg-card/70 p-3 ${collapsed ? 'text-center' : ''}`}>
          <p className={`text-sm font-semibold text-foreground ${collapsed ? 'hidden' : 'block'}`}>Studio Mode</p>
          <p className={`text-sm text-muted-foreground ${collapsed ? 'hidden' : 'block'}`}>Manage your storefront</p>
          <div className={`mt-3 flex items-center justify-center ${collapsed ? '' : 'justify-start'}`}>
            <Button size="sm" className="rounded-full">Upgrade</Button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between border-b border-border/60 bg-background/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onMenuToggle} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground lg:hidden">
          <Menu className="h-4 w-4" />
        </button>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Inventory</p>
          <h2 className="text-xl font-semibold text-foreground">Product Management</h2>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground transition hover:bg-accent">
          {resolvedTheme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button type="button" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground transition hover:bg-accent">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-primary" />
        </button>
      </div>
    </header>
  );
}

export function AdminDashboardSection() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase();

    const filtered = productRows.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);
      const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
      const matchesStatus = statusFilter === 'All' || product.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'Price') return Number.parseFloat(b.price.replace('$', '')) - Number.parseFloat(a.price.replace('$', ''));
      if (sortBy === 'Stock') return Number.parseInt(b.stock, 10) - Number.parseInt(a.stock, 10);
      return 0;
    });
  }, [categoryFilter, searchTerm, sortBy, statusFilter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <AnimatePresence>
          {mobileOpen ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden" onClick={() => setMobileOpen(false)} />
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ duration: 0.2 }} className="fixed inset-y-0 left-0 z-50 w-72 lg:hidden">
              <Sidebar collapsed={false} onToggle={() => setMobileOpen(false)} />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="hidden lg:block">
          <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
        </div>

        <div className="flex-1">
          <Header onMenuToggle={() => setMobileOpen((value) => !value)} />

          <Container className="py-6 sm:py-8 lg:py-10">
            <motion.div whileHover={{ y: -2, scale: 1.002 }} className="rounded-[1.6rem] border border-border/60 bg-card/80 p-4 shadow-soft sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Inventory</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">Products</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Demo catalog view for your storefront management experience.</p>
                </div>

                <Button onClick={() => setIsModalOpen(true)} className="w-full gap-2 rounded-full sm:w-auto">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search products"
                    className="h-11 w-full rounded-full border border-border/60 bg-background/80 pl-10 pr-4 text-sm outline-none ring-0"
                  />
                </div>

                <div className="relative">
                  <select
                    value={categoryFilter}
                    onChange={(event) => setCategoryFilter(event.target.value)}
                    className="h-11 w-full appearance-none rounded-full border border-border/60 bg-background/80 px-4 pr-10 text-sm outline-none"
                  >
                    <option value="All">All Categories</option>
                    <option value="Bags">Bags</option>
                    <option value="Outerwear">Outerwear</option>
                    <option value="Home">Home</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>

                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    className="h-11 w-full appearance-none rounded-full border border-border/60 bg-background/80 px-4 pr-10 text-sm outline-none"
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Draft">Draft</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="h-11 w-full appearance-none rounded-full border border-border/60 bg-background/80 px-4 pr-10 text-sm outline-none"
                  >
                    <option value="Newest">Sort: Newest</option>
                    <option value="Price">Sort: Price</option>
                    <option value="Stock">Sort: Stock</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-border/60 bg-background/70">
                <div className="hidden md:block">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-background/80 text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-medium">Product</th>
                        <th className="px-4 py-3 font-medium">Category</th>
                        <th className="px-4 py-3 font-medium">Price</th>
                        <th className="px-4 py-3 font-medium">Stock</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                        <th className="px-4 py-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 bg-card/50">
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="transition hover:bg-accent/40">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-sm font-semibold text-white`}>
                                {product.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{product.name}</p>
                                <p className="text-xs text-muted-foreground">SKU 0{product.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-muted-foreground">{product.category}</td>
                          <td className="px-4 py-4 font-semibold text-foreground">{product.price}</td>
                          <td className="px-4 py-4 text-muted-foreground">{product.stock}</td>
                          <td className="px-4 py-4">
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${product.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600' : product.status === 'Low Stock' ? 'bg-amber-500/10 text-amber-600' : 'bg-slate-500/10 text-slate-600'}`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <button type="button" className="rounded-full border border-border/60 bg-background/80 p-2 text-muted-foreground transition hover:text-foreground">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button type="button" className="rounded-full border border-border/60 bg-background/80 p-2 text-muted-foreground transition hover:text-foreground">
                                <Pencil className="h-4 w-4" />
                              </button>
                              <button type="button" className="rounded-full border border-border/60 bg-background/80 p-2 text-rose-500 transition hover:bg-rose-500/10">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 p-3 md:hidden">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="rounded-[1rem] border border-border/60 bg-card/70 p-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-sm font-semibold text-white`}>
                          {product.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.category}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="rounded-full bg-background/80 px-2.5 py-1">{product.price}</span>
                        <span className="rounded-full bg-background/80 px-2.5 py-1">Stock {product.stock}</span>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${product.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600' : product.status === 'Low Stock' ? 'bg-amber-500/10 text-amber-600' : 'bg-slate-500/10 text-slate-600'}`}>
                          {product.status}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-end gap-2">
                        <button type="button" className="rounded-full border border-border/60 bg-background/80 p-2 text-muted-foreground transition hover:text-foreground">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button type="button" className="rounded-full border border-border/60 bg-background/80 p-2 text-muted-foreground transition hover:text-foreground">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button type="button" className="rounded-full border border-border/60 bg-background/80 p-2 text-rose-500 transition hover:bg-rose-500/10">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">Showing {filteredProducts.length} of {productRows.length} products</p>
                <div className="flex flex-wrap items-center gap-2">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`h-9 w-9 rounded-full border text-sm transition ${page === 1 ? 'border-primary bg-primary text-primary-foreground' : 'border-border/60 bg-background/80 text-muted-foreground hover:text-foreground'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground transition hover:text-foreground">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="w-full max-w-2xl rounded-[1.5rem] border border-border/60 bg-background p-5 shadow-2xl sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Create</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">Add new product</h3>
                </div>
                <button type="button" onClick={() => setIsModalOpen(false)} className="rounded-full border border-border/60 bg-background/80 p-2 text-muted-foreground transition hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Product name</label>
                  <input className="h-11 w-full rounded-full border border-border/60 bg-background/80 px-4 text-sm outline-none" placeholder="Aurora Leather Tote" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Category</label>
                  <input className="h-11 w-full rounded-full border border-border/60 bg-background/80 px-4 text-sm outline-none" placeholder="Bags" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Price</label>
                  <input className="h-11 w-full rounded-full border border-border/60 bg-background/80 px-4 text-sm outline-none" placeholder="$248" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Stock</label>
                  <input className="h-11 w-full rounded-full border border-border/60 bg-background/80 px-4 text-sm outline-none" placeholder="24" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">Status</label>
                  <select className="h-11 w-full rounded-full border border-border/60 bg-background/80 px-4 text-sm outline-none">
                    <option>Active</option>
                    <option>Low Stock</option>
                    <option>Draft</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">Description</label>
                  <textarea className="min-h-24 w-full rounded-[1rem] border border-border/60 bg-background/80 px-4 py-3 text-sm outline-none" placeholder="Describe the product" />
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button variant="outline" onClick={() => setIsModalOpen(false)} className="rounded-full">Cancel</Button>
                <Button onClick={() => setIsModalOpen(false)} className="rounded-full">Save Product</Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
