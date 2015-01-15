import matplotlib.pylab as plt
import matplotlib.colors as mcolors
import numpy as np
from matplotlib import animation

iconsize = 32


# for a static fig
fig = plt.figure(frameon=False)
fig.set_size_inches(iconsize, iconsize)
A = np.random.randint(18, size=(iconsize, iconsize))
def truncate(x):
	if x < 2:
		return 1
	else:
		return 0

truncate = np.vectorize(truncate)
A = truncate(A)
ax = plt.Axes(fig, [0., 0., 1., 1.])
ax.set_axis_off()
fig.add_axes(ax)
ax.imshow(A,cmap='Greys', interpolation='nearest')
fig.savefig('../favicon.png', dpi=1)



# # for the animation

# def animate(nframe):
# 	plt.cla()
# 	A = np.random.randn(iconsize, iconsize)
# 	ax = plt.Axes(fig, [0., 0., 1., 1.])
# 	ax.set_axis_off()
# 	fig.add_axes(ax)
# 	ax.spy(A, precision=0.99999)


# fig = plt.figure(frameon=False)
# fig.set_size_inches(iconsize, iconsize)

# anim = animation.FuncAnimation(fig, animate, frames=1)
# anim.save('../favicon.gif', writer='imagemagick', fps=12);