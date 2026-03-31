import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, Plus, Minus, MessageCircle, Phone, Mail, User, ChevronRight, Star } from 'lucide-react';

const products = [
  { id: 1, name: "Cho Cho Instant Mohinga", category: "Instant Noodles", price: 4.50, weight: "120g", tag: "Bestseller", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400" },
  { id: 2, name: "Cho Cho Ohn No Khao Swè", category: "Instant Noodles", price: 4.50, weight: "120g", img: "https://images.unsplash.com/photo-1626804475297-4160cb8bf5af?w=400" },
  { id: 3, name: "Royal Myanmar Teamix", category: "Drinks", price: 12.00, weight: "30 sachets", tag: "Popular", img: "https://images.unsplash.com/photo-1571934811356-5cc50965318d?w=400" },
  { id: 4, name: "Premier 3 in 1 Coffee", category: "Drinks", price: 11.50, weight: "30 sachets", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400" },
  { id: 5, name: "Zayan Pickled Tea (Spicy)", category: "Pickled Tea & Beans", price: 8.50, weight: "200g", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=400" },
  { id: 6, name: "Ah Yee Taung Fried Beans", category: "Pickled Tea & Beans", price: 5.00, weight: "150g", img: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400" }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (p) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === p.id);
      if (exists) return prev.map(i => i.id === p.id ? {...i, qty: i.qty + 1} : i);
      return [...prev, {...p, qty: 1}];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, d) => {
    setCart(prev => prev.map(i => i.id === id ? {...i, qty: i.qty + d} : i).filter(i => i.qty > 0));
  };

  const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 flex flex-col selection:bg-emerald-200">
      
      {/* Top Banner */}
      <div className="bg-emerald-950 text-emerald-50 text-[11px] py-2 px-4 flex justify-between uppercase tracking-widest font-semibold">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex gap-4 items-center hidden sm:flex">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3"/> +64 123 456</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3"/> hello@fullmoonnz.com</span>
          </div>
          <span className="mx-auto sm:mx-0 text-emerald-200">✨ Free Delivery on orders over $50</span>
        </div>
      </div>

      {/* Glassmorphism Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/30 transition-all">
               <span className="text-white font-black text-xl tracking-tighter">FM</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-black text-slate-900 leading-none tracking-tight">FULL MOON</h1>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">NZ Trading</span>
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-8">
            <button className="hidden md:flex flex-col items-center text-slate-500 hover:text-emerald-600 transition-colors">
              <User className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Account</span>
            </button>
            
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="flex flex-col items-center text-slate-500 hover:text-emerald-600 transition-colors relative group"
            >
              <div className="relative">
                <ShoppingBag className="w-6 h-6 mb-1 transform group-hover:scale-110 transition-transform" />
                {cart.length > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-emerald-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md border-2 border-white">
                    {cart.reduce((sum, item) => sum + item.qty, 0)}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider hidden md:block">Basket</span>
            </button>
          </div>
        </div>
      </header>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 md:py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 opacity-90"></div>
        {/* Decorative Blur Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
            Welcome to New Zealand's Premium Asian Market
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Authentic Taste of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Myanmar 🇲🇲</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            From comforting Mohinga to aromatic pickled tea, we deliver the finest ingredients directly to your doorstep anywhere in NZ.
          </p>
          <button className="bg-white text-emerald-900 font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-emerald-50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
            Shop Now <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 w-full flex-1">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Featured Groceries</h3>
            <p className="text-slate-500 text-sm mt-1">Handpicked quality products for you.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map(p => (
            <div key={p.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col relative">
              
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-square overflow-hidden bg-slate-50 p-6 flex items-center justify-center">
                <img 
                  src={p.img} 
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500" 
                  alt={p.name} 
                />
                
                {/* Floating Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-slate-100">
                    {p.weight}
                  </span>
                  {p.tag && (
                    <span className="bg-emerald-500 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Star className="w-2.5 h-2.5" fill="currentColor"/> {p.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-5 flex flex-col flex-1">
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1.5">{p.category}</span>
                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2 h-10">
                  {p.name}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-black text-lg text-slate-900">${p.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(p)} 
                    className="bg-slate-900 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all shadow-md focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modern Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
          
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col animate-slide-in-right rounded-l-3xl overflow-hidden">
            
            {/* Cart Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-md">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-emerald-600"/>
                Your Basket
              </h3>
              <button onClick={() => setIsCartOpen(false)} className="p-2 bg-slate-50 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag className="w-16 h-16 text-slate-300 mb-4" />
                  <p className="font-bold text-slate-500">Your basket is empty</p>
                  <p className="text-sm text-slate-400 mt-1">Add some authentic treats!</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-3 bg-white border border-slate-100 rounded-2xl shadow-sm relative group">
                    <img src={item.img} className="w-16 h-16 rounded-xl object-cover border border-slate-50" />
                    <div className="flex-1 flex flex-col justify-center pr-2">
                      <p className="text-sm font-bold text-slate-800 line-clamp-1 mb-1">{item.name}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-emerald-600 font-black">${(item.price * item.qty).toFixed(2)}</p>
                        
                        {/* Custom Qty Controls */}
                        <div className="flex items-center bg-slate-50 rounded-full border border-slate-200 p-0.5">
                          <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-white rounded-full transition-all shadow-sm">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-6 text-center text-slate-700">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-white rounded-full transition-all shadow-sm">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Checkout Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-slate-100 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center font-black text-xl text-slate-900 mb-6">
                  <span className="text-sm text-slate-500 font-medium">Estimated Total</span>
                  <span>${total.toFixed(2)} <span className="text-xs text-slate-400 ml-1">NZD</span></span>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-600/20">
                  <MessageCircle className="w-5 h-5" /> Order via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}