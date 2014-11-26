import matplotlib.pylab as plt
import matplotlib.colors as mcolors
import numpy as np
from matplotlib import animation

iconsize = 16

def animate(nframe):
	plt.cla()
	A = np.random.randn(iconsize, iconsize)
	ax = plt.Axes(fig, [0., 0., 1., 1.])
	ax.set_axis_off()
	fig.add_axes(ax)
	ax.spy(A, precision=0.1)


# # plt.show()
# fig.savefig('figure.png', dpi=1)


fig = plt.figure(frameon=False)
fig.set_size_inches(iconsize, iconsize)

anim = animation.FuncAnimation(fig, animate, frames=40)
anim.save('../favicon.gif', writer='imagemagick', fps=10);