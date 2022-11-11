interface ITransaction {
  name?: string;
  category?: string;
  total?: string;
}

const TransactionItem = ({ name, category, total }: ITransaction) => {
  return (
    <div>
      <div>
        <div>
          <img src={`../../../public/${category}.svg`} alt={category} />
        </div>
        <div>
          <h5>{name}</h5>
          <p>{category}</p>
        </div>
        <h4>-{total}</h4>
      </div>
    </div>
  )
}

export default TransactionItem