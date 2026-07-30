'use client'

import React, { createContext, useContext, useState } from 'react'
import { LeadCaptureModal } from './LeadCaptureModal'

interface TrialModalContextType {
  openModal: () => void
  closeModal: () => void
  isOpen: boolean
}

const TrialModalContext = createContext<TrialModalContextType | undefined>(undefined)

export const TrialModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <TrialModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <LeadCaptureModal isOpen={isOpen} onClose={closeModal} />
    </TrialModalContext.Provider>
  )
}

export const useTrialModal = () => {
  const context = useContext(TrialModalContext)
  if (!context) {
    throw new Error('useTrialModal must be used within a TrialModalProvider')
  }
  return context
}
