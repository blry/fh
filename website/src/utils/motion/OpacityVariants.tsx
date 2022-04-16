const OpacityVariants = {
    visible: {
      opacity: 1,
      transition: {
        delay: .3
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3,
      },
    },
}

export { OpacityVariants }