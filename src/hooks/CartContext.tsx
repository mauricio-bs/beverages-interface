import React, { createContext, useContext, useState, useEffect } from 'react'

interface IProducts {
  id: string
  name: string
  description?: string
  imageUrl?: string
  isActive: boolean
  price: number
  quantity: number
}

const CartContext = createContext({})

export const CartProvider = ({ children }: NodeModule) => {
  const [cartProducts, setCartProducts] = useState([
    {
      id: '',
      name: '',
      description: '',
      imageUrl: '',
      isActive: false,
      price: 0,
      quantity: 0
    }
  ])

  const updateLocalStorate = async (products: Array<IProducts>) => {
    await localStorage.setItem('coffeland:cartInfo', JSON.stringify(products))
  }

  const putProductCart = async (product: IProducts) => {
    const cartIndex = cartProducts.findIndex(
      (prod: IProducts) => prod.id === product.id
    )

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity += 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]

      setCartProducts(newCartProducts)
    }

    await updateLocalStorate(newCartProducts)
  }

  const deleteProducts = async (productId: string) => {
    const newCart = cartProducts.filter(
      (product: IProducts) => product.id !== productId
    )

    setCartProducts(newCart)

    await updateLocalStorate(newCart)
  }

  const increaseProducts = async (productId: string) => {
    const newCart = cartProducts.filter((product: IProducts) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await updateLocalStorate(newCart)
  }

  const decreaseProducts = async (productId: string) => {
    const cartIndex = cartProducts.findIndex((prod) => prod.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProducts(newCart)

      await updateLocalStorate(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadProductData = async () => {
      const clientCartData = await localStorage.getItem(
        'coffeland:cartProducts'
      )

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadProductData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        deleteProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with CartContext')
  }

  return context
}
